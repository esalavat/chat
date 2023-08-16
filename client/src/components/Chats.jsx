import React from 'react';

const Chats = (props) => {
    
    //console.log(props.lines);

    return (
        <ul className="p-2">
            {props.lines.map((line) => (
                <li 
                    key={line.id} 
                    title={line.timestamp}
                    className="flex flex-row bg-slate-100 rounded-lg mb-1 overflow-hidden">
                        <div className="flex-initial w-16 bg-slate-200 px-2 py-1">{line.from}</div>
                        <div className="flex-auto px-2 py-1">{line.message}</div>
                </li>
            ))}
        </ul>
    );
}

export default Chats;