var express = require("express");
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var bodyParser =require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var theNorth = [];

app.get('/', function(request, response){
	response.json(theNorth);
})

app.get('/theNorth', function(request, response){
	response.json(theNorth);
})

app.post('/theNorth', function(request, response){
	var house = request.body.house;
	theNorth.push(house);
	response.json("success");
})


server.listen(3000, function(){
	console.log("listen to port 3000 your Mom");
})