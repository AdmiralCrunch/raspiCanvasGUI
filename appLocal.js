var ws = require('ws');
var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var SerialPort = require("serialport");


/* EXPRESS */
var app = express();
var router = express.Router();
app.use(express.static('templates'));
var server = http.createServer(app);

app.use('/', router);

app.get('/bootstrap.min.css', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/bootstrap.min.css"); });
app.get('/bootstrap-grid.min.css', function(req, res) {res.sendFile(__dirname + "/assets/css" + "/bootstrap-grid.min.css"); });
app.get('/style.css', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/style.css"); }); 
app.get('/pr.js', function(req, res) { res.sendFile(__dirname + "/assets/js" + "/pr.js"); }); 
app.get('/websocket.js', function(req, res) { res.sendFile(__dirname + "/assets/css" + "/websocket.js"); });  
app.get('/jquery-3.3.1.min.js', function(req, res) { res.sendFile(__dirname + "/assets/js" + "/jquery-3.3.1.min.js"); });  
app.get('/splash.png', function(req, res) { res.sendFile(__dirname + "/assets/img" + "/splash.png"); }); 
app.get('/sine.png', function(req, res) { res.sendFile(__dirname + "/assets/img/lfo" + "/sine.png"); }); 
app.get('/saw.png', function(req, res) { res.sendFile(__dirname + "/assets/img/lfo" + "/saw.png"); }); 
app.get('/square.png', function(req, res) { res.sendFile(__dirname + "/assets/img/lfo" + "/square.png"); }); 
app.get('/tri.png', function(req, res) { res.sendFile(__dirname + "/assets/img/lfo" + "/tri.png"); }); 
app.get('/splashScreen.mp4', function(req, res) { res.sendFile(__dirname + "/assets" + "/splashScreen.mp4"); });  

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/trackMenu.html'));   
});

router.get('/trackMenu', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackMenu.html')); });
router.get('/trackEdit', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackEdit.html')); });
router.get('/trackCtrlEdit', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackCtrlEdit.html')); });
router.get('/trackLfo', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackLfo.html')); });
router.get('/trackPattern', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackPattern.html')); });
router.get('/trackPatternLoad', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackPatternLoad.html')); });
router.get('/trackPatternSave', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackPatternSave.html')); });
router.get('/trackPatternClear', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackPatternClear.html')); });
router.get('/globalMenu', (req, res) => { res.sendFile(path.join(__dirname + '/templates/globalMenu.html')); });

server.listen(3000, () => {
    console.log('SERVER runnning on port 3000');
});