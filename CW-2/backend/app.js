/* Create your Express Server Here */
var express = require('express');
var http = require('http');
var app = express();

var user= [
    {'email': 'user@email.com', 'password': 'mypassword'}
];

var lessonList = [
    {'topic': 'math', 'location': 'hendon', 'price': 100},
    {'topic': 'math', 'location': 'UK', 'price': 90},
    {'topic': 'math', 'location': 'US', 'price': 80},
    {'topic': 'math', 'location': 'Nigeria', 'price': 70},
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

app.get('/lesson', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(lessonList));
});

http.createServer(app).listen(3000);
