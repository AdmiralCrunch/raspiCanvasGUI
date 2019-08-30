
var http = require('http');
var express = require('express');

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
app.get('/splash.png', function(req, res) { res.sendFile(__dirname + "/assets//img" + "/splash.png"); }); 
app.get('/splashScreen.mp4', function(req, res) { res.sendFile(__dirname + "/assets" + "/splashScreen.mp4"); });   
app.get('/jquery-3.3.1.min.js', function(req, res) { res.sendFile(__dirname + "/assets/js" + "/jquery-3.3.1.min.js"); });  

router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackMenu.html')); });
router.get('/trackMenu', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackMenu.html')); });
router.get('/trackEdit', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackEdit.html')); });
router.get('/trackLfo', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackLfo.html')); });
router.get('/trackPattern', (req, res) => { res.sendFile(path.join(__dirname + '/templates/trackPattern.html')); });

server.listen(3000, () => {
    console.log('SERVER runnning on port 3000');
});