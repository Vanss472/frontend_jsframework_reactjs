var express = require('express');
var app = express();
var path = require('path');

//Serving static files in Express
app.use('/', express.static(__dirname + '/assets'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/assets/templates/index.html'));
});

app.listen(8080);
console.log('Magic happens on port 8080');