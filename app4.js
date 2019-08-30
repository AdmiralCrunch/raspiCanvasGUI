var ws = require('ws');
var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');


/* EXPRESS */
var app = express();
var router = express.Router();
app.use(express.static('templates'));
var server = http.createServer(app);

app.use('/', router);

app.get('/images/coin-sprite-animation.png', function(req, res) { res.sendFile(__dirname + "/images" + "/coin-sprite-animation.png"); });

router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/templates/menu.html')); });
router.get('/menu', (req, res) => { res.sendFile(path.join(__dirname + '/templates/menu.html')); });



server.listen(3000, () => {
    console.log('SERVER runnning on port 3000');
});