var express = require("express");
var app = express();
var http = require("http").createServer(app);
var path = require("path");
var { WebSocketServer } = require("ws");

var httpPort = 5000;

app.use(express.static(path.join(__dirname, "client/dist")));

app.get('*', (req,res) =>{
    res.sendFile(__dirname + "/client/src/index.html");
});

var server = http.listen(httpPort, function() {
    console.log("Node HTTP server running on port " + httpPort + ".");
});

const wsServer = new WebSocketServer({server});

wsServer.on("connection", (socket) => {
    
    console.log("New WebSocket Connected");

    socket.on("message", (msg) => {
        const msgObj = JSON.parse(msg);
        wsServer.clients.forEach((client) => {
            client.send(JSON.stringify(msgObj));
        });
    })
});