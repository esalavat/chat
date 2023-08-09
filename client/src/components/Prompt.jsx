import React from 'react';

const Prompt = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("message: " + e.target.elements.message.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="message" placeholder="message"></input>
            <button type="submit">Send</button>
        </form>
    );
}

export default Prompt;