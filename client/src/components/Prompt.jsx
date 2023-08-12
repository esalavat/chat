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
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="message" placeholder="message"></input>
            <button type="submit">Send</button>
        </form>
    );
}

export default Prompt;