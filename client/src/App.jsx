import React, { useState } from "react";
import Chats from "./components/Chats";
import Prompt from "./components/Prompt";
import Username from "./components/Username";

const App = () => {
    
    const [username, setUsername] = useState("Anon");

    const [lines, setLines] = useState(
        [
            {"id": "1", "from": "Eric", "message": "Hello World!", "timestamp": 12345},
            {"id": "2", "from": "Lisa", "message": "Hi there", "timestamp": 12346}
        ]
    );

    const addLine = (line) => {
        setLines(prev => [...prev, line]);
    }

    const changeUsername = (name) => {
        setUsername(name);
    }

    return (
        <div>
            <h1>Chat App</h1>
            <Username username={username} changeUsername={changeUsername} />
            <Chats lines={lines} />
            <Prompt username={username} addLine={addLine} />
        </div>
    );
};

export default App;