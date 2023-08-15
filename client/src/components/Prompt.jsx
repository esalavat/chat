import React from 'react';
import { v4 as uuidv4 } from "uuid";

const Prompt = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addLine({
            id: uuidv4(),
            timestamp: Date.now(),
            from: props.username,
            message: e.target.elements.message.value
        });
        e.target.elements.message.value = "";
    }

    return (
        <form onSubmit={handleSubmit} className="bg-slate-500 text-white p-2 w-full flex flex-row">
            <input type="text" name="message" placeholder="message" className="border text-gray-950 rounded-xl px-2 py-1 flex-auto"></input>
            <button type="submit" className="bg-sky-600 hover:bg-sky-700 px-2 py-1 ml-2 rounded-lg flex-initial">Send</button>
        </form>
    );
}

export default Prompt;