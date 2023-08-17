const { randomUUID } = require("crypto");
var express = require("express");
var app = express();
var http = require("http").createServer(app);
var path = require("path");
var { WebSocketServer } = require("ws");

var httpPort = 5000;

let users = {};

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

    let id = randomUUID();
    newUser(id, socket);

    socket.on("message", (msg) => {
        //console.log("onMessage", msg);

        const msgObj = JSON.parse(msg);

        console.log("onMessage", msgObj);
        
        switch(msgObj.eventType) {
            case "line":
                handleLine(msgObj.eventData);
                break;
            case "changeUser":
                handleChangeUser(msgObj.eventData, socket);
                break;
            default:
                console.log("onMessage: missing or unknown eventType."); 
        }
    });

    socket.on("close", () => {
        console.log("onClose: ", id);

        removeUser(id);
    });
});

const handleLine = (line) => {
    console.log("handleLine: ", line);

    line["id"] = randomUUID();

    const event = {
        eventType: "lines",
        eventData: [line]
    };

    broadcast(event);
}

const newUser = (id, socket) => {
    let num = 1;
    let name = "Anon";
    let user;
    do {
        user = name+num;
        num++;
    } while (objValuesContain(users, user));

    addUser({id: id, username: user}, socket);
}

const handleChangeUser = (data, socket) => {
    if(objValuesContain(users, data.username)) {
        userExists(data.username, socket);
    } else {
        changeUser(data, socket);
    }
}

const changeUser = (user, socket) => {
    users[user.id] = user.username;
    sendUserAccept(user, socket);
    broadcastUsers();
}

const removeUser = (id) => {
    delete users[id];
    broadcastUsers();
}

const userExists = (user, socket) => {
    const event = {
        eventType: "userExists",
        eventData: user
    };

    socket.send(JSON.stringify(event));
}

const addUser = (user, socket) => {
    users[user.id] = user.username;

    sendUserAccept(user, socket);

    broadcastUsers();
}

const broadcastUsers = () => {
    
    const event = {
        eventType: "users",
        eventData: Object.values(users)
    }

    broadcast(event);
}

const sendUserAccept = (user, socket) => {
    var event = {
        eventType: "userAccept",
        eventData: user
    }

    socket.send(JSON.stringify(event));
    broadcastUsers();
}

const broadcast = (event) => {
    wsServer.clients.forEach((client) => {
        client.send(JSON.stringify(event));
    });
}

const objValuesContain = (obj, value) => {
    return Object.values(obj).indexOf(value) != -1;
}