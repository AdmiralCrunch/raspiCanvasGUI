var express = require('express');
var app = express();
var router = express.Router();


app.use('/', router);

router.get('/', function(req, resp) {
    resp.end('first one');
});

router.get('/aaa', function(req, resp) {
    resp.end('second one');
});

app.listen(3000, function() {
    console.log('listening');
});
