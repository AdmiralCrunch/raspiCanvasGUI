var http = require('http');
var fs = require('fs');
var SerialPort = require("serialport");
var W3CWebSocket = require('websocket').w3cwebsocket;

var sp = new SerialPort("/dev/ttyAMA0", { autoOpen: false });

SerialPort.list(function(err, ports) {
	ports.forEach(function(port) {
		console.log(port.comName);
	});
});


var client = new W3CWebSocket('ws://127.0.0.1:3000/');
client.onerror = function(err) {
    console.log('Connection Error', err);
};
client.onopen = function() {
    console.log('WebSocket Client Connected');
 
    function sendNumber() {
        if (client.readyState === client.OPEN) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            client.send(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
};


/* pianoRoll Range  -2 bis +8 */
var pianoRollRangeMin = -2;
var pianoRollRangeMax = 8;
var pianoRollOctaveNotes = [
	 ['C', 'full'],
	 ['C#', 'half'],
	 ['D', 'full'],
	 ['D#', 'half'],
	 ['E', 'full'],
	 ['F', 'full'],
	 ['F#', 'half'],
	 ['G', 'full'],
	 ['G#', 'half'],
	 ['A', 'full'],
	 ['A#', 'half'],
	 ['B', 'full'],
];


sp.open(function(err) {
	if(err) { console.log('error opening: ' + err.message);	}
});

sp.on("open", function() {
	console.log('open');
});

sp.on("data", function(data) {
	console.log('#### ' + data);
});


http.createServer(function(req, res) {
	fs.readFile('templates/splashScreen.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(3000);


