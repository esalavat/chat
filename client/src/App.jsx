import React, { useState, useEffect, useRef } from "react";
import Layout from "components/Layout";
import ChatRoom from "components/ChatRoom";
import Prompt from "components/Prompt";
import Username from "components/Username";
import ModalMessage from "components/ModalMessage";

const App = () => {
    
    const [username, setUsername] = useState();
    const [userId, setUserId] = useState();
    const [lines, setLines] = useState([]);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();

    let ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:5000");
        ws.current.onopen = (e) => {
            console.log("onopen", e);
        };
        ws.current.onmessage = (event) => {
            
            console.log("onmessage", event);

            let data = JSON.parse(event.data);
            
            switch(data.eventType) {
                case "lines":
                    handleLines(data.eventData);
                    break;

                case "users":
                    handleUsers(data.eventData);
                    break;

                case "userExists":
                    handleUserExists(data.eventData);
                    break;

                case "userAccept":
                    handleUserAccept(data.eventData);
                    break;
            }
        }    
    },[]);

    const handleLines = (lines) => {
        console.log("handleLines: ", lines);
        setLines(prev => [...prev, ...lines]);
    }

    const handleUsers = (users) => {
        console.log("handleUser: ", users);
        setUsers(users);
    }

    const handleUserExists = (user) => {
        console.log("handleUserExists: ", user);
        showMessage("User " + user + " already exists.  Please choose another.");
    }

    const handleUserAccept = (user) => {
        console.log("handleUserAccept: ", user);
        setUsername(user.username);
        setUserId(user.id);
    }
    
    const addLine = (line) => {
        const event = {
            eventType: "line",
            eventData: line
        };

        ws.current.send(JSON.stringify(event));
    }

    const changeUsername = (username) => {
        const event = {
            eventType: "changeUser",
            eventData: {
                id: userId,
                username: username
            }
        };

        ws.current.send(JSON.stringify(event));
    }

    const showMessage = (message) => {
        setMessage(message);
    }

    const hideMessage = () => {
        setMessage();
    }

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="flex-initial">
                    <h1 className="bg-slate-600 text-white text-4xl font-bold p-2">Chat App</h1>
                    <Username username={username} changeUsername={changeUsername} />
                </div>
                <div className="flex-auto overflow-y-auto h-full">
                    <ChatRoom lines={lines} users={users} />
                </div>
                <div className="flex-initial shadow-lg">
                    <Prompt username={username} addLine={addLine} />
                </div>
            </div>
            <ModalMessage message={message} closeModal={hideMessage} />
        </>
    );
};

export default App;