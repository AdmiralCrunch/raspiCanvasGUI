var ws = require('ws');
var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var SerialPort = require("serialport");
var W3CWebSocket = require('websocket').w3cwebsocket;


/* EXPRESS */
var app = express();
var router = express.Router();
app.use(express.static('templates'));
var server = http.createServer(app);

app.use('/', router);

app.get('/bootstrap.min.css', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/bootstrap.min.css"); });
app.get('/bootstrap-grid.min.css', function(req, res) {res.sendFile(__dirname + "/assets/css" + "/bootstrap-grid.min.css"); });
app.get('/style.css', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/style2.css"); }); 
app.get('/pr.js', function(req, res) { res.sendFile(__dirname + "/assets/js" + "/pr.js"); }); 
app.get('/websocket.js', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/websocket.js"); });  
app.get('/splash.png', function(req, res) { res.sendFile(__dirname + "/assets//img" + "/splash.png"); }); 
app.get('/sine.png', function(req, res) { res.sendFile(__dirname + "/assets/img/lfo" + "/sine.png"); }); 
app.get('/saw.png', function(req, res) { res.sendFile(__dirname + "/assets/img/lfo" + "/saw.png"); }); 
app.get('/square.png', function(req, res) { res.sendFile(__dirname + "/assets/img/lfo" + "/square.png"); }); 
app.get('/tri.png', function(req, res) { res.sendFile(__dirname + "/assets/img/lfo" + "/tri.png"); }); 
app.get('/splashScreen.mp4', function(req, res) { res.sendFile(__dirname + "/assets" + "/splashScreen.mp4"); });   
app.get('/jquery-3.3.1.min.js', function(req, res) { res.sendFile(__dirname + "/assets/js" + "/jquery-3.3.1.min.js"); });  

router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/templates/menu.html')); });
router.get('/menu', (req, res) => { res.sendFile(path.join(__dirname + '/templates/menu.html')); });


/* BUFFER HELPER */
// is set to true if ":" is found in incoming serial string
var flagInt = false;

/* WEBSOCKET */
var tempRequest =  '';
var wsServer = new ws.Server({server});

wsServer.on('connection', socket => {

    socket.on('message', message => {
        // console.log('WS from template <-- ', message);
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
        
        

        var bl = Buffer.byteLength(data);
        // Stream Buffer byte by byte to find ":"
        // If ":" is found, Value starts (flagInt = true)
        for(i=0; i<=(bl-1); i++) {  
            if(flagInt == true) {  
                // SERIAL INPUT IS VALUE
                var checkInt = String.fromCharCode(data[i]);    
                // CHECK IF STRING ENDS
                if(checkInt != ";") {  
                    // CONCAT VALUE                  
                    tempRequest += checkInt;                    
                } else {   
                    // VALUE END                 
                    console.log('str OK: ' + tempRequest);                      
                    var stringSlices = tempRequest.split(":");                     
                    socket.send(JSON.stringify({ type: stringSlices[0], value: stringSlices[1] }));                     
                    tempRequest = '';  
                }
            } else {
                // SERIAL INPUT IS STRING 
                var checkChar = String.fromCharCode(data[i]);  
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
        
    });
});


server.listen(3000, () => {
    console.log('SERVER runnning on port 3000');
});