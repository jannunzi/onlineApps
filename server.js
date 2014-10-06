// load webservice and database libraries
var express = require('express');
//var mongojs = require('mongojs');

// instantiate both libraries and connecto to the cs5610353 database
var app = express();
//var db = mongojs("cs5610353", ["serviceClients"]);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get("/env", function (req, res) {
    res.json(process.env);
});

// listen to port 3000 in localhost
app.listen(port, ipaddress);
