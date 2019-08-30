var ws = require('ws');
var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var SerialPort = require("serialport");
var W3CWebSocket = require('websocket').w3cwebsocket;

/* BUFFER HELPER */
var flagInt = false;

/* NAV VARS */
var navMarker = 'init';

/* SERIAL PORT */ 
var sp = new SerialPort("/dev/ttyAMA0", { autoOpen: false });

sp.open(function(err) {
	if(err) { console.log('error opening: ' + err.message);	}
});
sp.on("open", function() {
	console.log('SerialPort /dev/ttyAMA0 is open');
});
sp.on("data", function(data) {
	console.log('#### ' + data);
});

/* WEBSOCKET */
var tempRequest =  '';
var wsServer = new ws.Server({server});




/* EXPRESS */
var app = express();
app.use(express.static('templates'));
var server = http.createServer(app);

app.get('/bootstrap.min.css', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/bootstrap.min.css"); });
app.get('/bootstrap-grid.min.css', function(req, res) {res.sendFile(__dirname + "/assets/css" + "/bootstrap-grid.min.css"); });
app.get('/style.css', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/style.css"); }); 
app.get('/pr.js', function(req, res) { res.sendFile(__dirname + "/assets/js" + "/pr.js"); }); 
app.get('/websocket.js', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/websocket.js"); });  
app.get('/splash.png', function(req, res) { res.sendFile(__dirname + "/assets//img" + "/splash.png"); });  

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/splashScreen.html'));   
});

wsServer.on('connection', socket => {

    console.log('Connected WS');
    socket.send('WS --> ', socket);
    socket.on('message', message => {
        console.log('WS <-- ', message);
    });

    /* SERIAL PORT */
    var sp = new SerialPort("/dev/ttyAMA0", { 
	    autoOpen: false,
	    baudRate: 9600 
    });   

    sp.open(function(err) {
        console.log('opened SP');
        if(err) { console.log('error opening: ' + err.message);	}
    });
    sp.on("open", function() {
        console.log('SERIAL PORT OPENED');
    });
    sp.on("data", function(data) {
        // Stream Buffer byte by byte to find ":"
        var bl = Buffer.byteLength(data);
        for(i=0; i<=bl; i++) { 
            if(flagInt == true) {                
                if(data[i] != "3b") {
                    var checkInt = data[i].toInt('ascii');
                    tempRequest += checkInt;                    
                } else {                    
                    console.log('str OK: ' + tempRequest);
                    var stringSlices = tempRequest.split(":"); 
                    socket.send(JSON.stringify({ type: stringSlices[0], value: stringSlices[1] }));
                    tempRequest = '';                
                }
            } else {
                console.log(data);
                var checkChar = data[i].toString('ascii');
                if(checkChar == ":") {
                    tempRequest += checkChar;
                    flagInt = true;
                } else {
                    // concat char to string
                    tempRequest += checkChar;
                    flagInt = false;
                }
                
            }
                        
        } 
        console.log(tempRequest); 
    });
});

server.listen(3000, () => {
    console.log('SERVER runnning on port 3000');
});

