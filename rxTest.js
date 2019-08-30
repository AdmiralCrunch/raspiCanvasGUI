var SerialPort = require("serialport");

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
    
    console.log('imcoming data: ' + data);

    
          
    
});



