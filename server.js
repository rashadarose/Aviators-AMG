//Using Routes and module.exports
/*var http = require('http');
var app = require('./wwwapp');
http.createServer(app.handleRequest).listen(8080);
console.log('Server Running On Port:8080');*/


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());
//app.use(express.static('public'));

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/public', {
    maxAge: '1h'
}));

/*app.get('/', function(req, res, next){
    res.sendFile('/index.html', {
       root: __dirname + '/public' 
    });
    res.send('hello');
});*/

/*app.get('/house', function(req, res, next){
    res.sendFile('views/home.html', {
       root: __dirname + '/public' 
    });
});

app.get('/re', function(req, res, next){
    res.sendFile('index.html', {
       root: __dirname + '/public' 
    });
});*/

app.listen(8080, function () {
    console.log('Port 8080');
});
