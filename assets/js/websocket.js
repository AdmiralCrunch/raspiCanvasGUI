 /* WEBSOCKET */
 var connection = new WebSocket('ws://127.0.0.1:3000'); 

 connection.onopen = function () {
     // connection.send('Ping from C');
     console.log('WebSocket established ');

 };  

 connection.onerror = function (error) {
     console.log('WebSocket Error ' + error);
 };   

 connection.onmessage = function (e) { 
     var d = JSON.parse(e.data); 
         
     eval(d.type)(d.nr, d.value, d.value2, d.value3); 
 };