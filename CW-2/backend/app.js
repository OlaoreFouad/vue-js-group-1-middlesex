/* Create your Express Server Here */
var express = require('express');
var http = require('http');
var app = express();

var user= [
    {'email': 'user@email.com', 'password': 'mypassword'}
];

app.use(function(request, response, next){
    console.log("In comes a request to: " + request.url);
    next();
});

app.get('/user', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(user));
});

http.createServer(app).listen(3000);
