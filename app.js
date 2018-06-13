var express = require('express');
var bodyParser = require('body-parser');
var http =require("http");
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,DELETE,OPTIONS");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.listen(3000, function() {
    console.log('Magic happens at port 3000!')
});

app.get('/', function(req, res) {    
    res.send('<h1>Hello World!</h1>')
});


app.get('/home', function(req, res) {
	var options = {
		method: 'GET',
		url: 'http://localhost/angularfilms/weather.php?command=search&keyword=Istanbul',
	};
	var req = http.request(options, function(res){
        console.log(res);
    });    
})