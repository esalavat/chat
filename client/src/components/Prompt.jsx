import React from 'react';
import UUID from "node-uuid";

const Prompt = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addLine({
            id: UUID.v4(),
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