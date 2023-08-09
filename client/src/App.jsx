import React from 'react';
import Chats from './components/Chats';
import Prompt from './components/Prompt';

const App = () => {
    
    const lines = [
        {"id": 1, "from": "Eric", "message": "Hello World!", "timestamp": "12345"},
        {"id": 2, "from": "Lisa", "message": "Hi there", "timestamp": "12346"}
    ];

    return (
        <div>
            <h1>Chat App</h1>
            <Chats lines={lines} />
            <Prompt />
        </div>
    );
};

export default App;