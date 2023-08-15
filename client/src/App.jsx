import React, { useState, useEffect, useRef } from "react";
import Layout from "components/Layout";
import ChatRoom from "components/ChatRoom";
import Prompt from "components/Prompt";
import Username from "components/Username";

const App = () => {
    
    const [username, setUsername] = useState("Anon");

    const [lines, setLines] = useState([]);

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
        <div className="flex flex-col h-full">
            <div className="flex-initial">
                <h1 className="bg-slate-600 text-white text-4xl font-bold p-2">Chat App</h1>
                <Username username={username} changeUsername={changeUsername} />
            </div>
            <div className="flex-auto overflow-y-scroll">
                <ChatRoom lines={lines} />
            </div>
            <div className="flex-initial shadow-lg">
                <Prompt username={username} addLine={addLine} />
            </div>
        </div>
    );
};

export default App;