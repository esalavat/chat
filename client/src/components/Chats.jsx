import React from 'react';

const Chats = (props) => {
    console.log(props.lines);
    return (
        <ul>
            {props.lines.map((line) => (
                <li key={line.id} title={line.timestamp}>{line.from}: {line.message}</li>
            ))}
        </ul>
    );
}

export default Chats;