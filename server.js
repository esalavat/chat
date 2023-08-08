var express = require("express");
var app = express();
var http = require("http").createServer(app);
var path = require("path");

var httpPort = 5000;

app.use(express.static(path.join(__dirname, "client/dist")));

app.get('*', (req,res) =>{
    res.sendFile(__dirname + "/client/src/index.html");
});

var server = http.listen(httpPort, function() {
    console.log("Node HTTP server running on port " + httpPort + ".");
});
