import React, { useState, useEffect, useRef } from "react";
import Layout from "components/Layout";
import Chats from "components/Chats";
import Prompt from "components/Prompt";
import Username from "components/Username";
import "./app.css";

const App = () => {
    
    const [username, setUsername] = useState("Anon");

    const [lines, setLines] = useState(
        [
            {"id": "1", "from": "Eric", "message": "Hello World!", "timestamp": 12345},
            {"id": "2", "from": "Lisa", "message": "Hi there", "timestamp": 12346}
        ]
    );

    let ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:5000");
        ws.current.onopen = (e) => {
            console.log("onopen", e);
        };
        ws.current.onmessage = (event) => {
            console.log("onmessage", JSON.parse(event.data));
            setLines(prev => [...prev, JSON.parse(event.data)]);
        }    
    },[]);
    
    const addLine = (line) => {
        ws.current.send(JSON.stringify(line));
    }

    const changeUsername = (name) => {
        setUsername(name);
    }

    return (
        <Layout>
            <h1 className="text-primary text-4xl font-bold">Chat App</h1>
            <Username username={username} changeUsername={changeUsername} />
            <Chats lines={lines} />
            <Prompt username={username} addLine={addLine} />
        </Layout>
    );
};

export default App;