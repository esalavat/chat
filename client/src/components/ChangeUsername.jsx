import React, { useState } from "react";

const ChangeUsername = (props) => {
    
    const [editMode, setEditMode] = useState(false);
    
    const toggleEditMode = () => {
        setEditMode(prev => !prev);
    }

        
    const handleSubmit = (e) => {
        e.preventDefault();
        props.changeUsername(e.target.elements.username.value);
        toggleEditMode();
    };

    return (
        <>
            { !editMode 
                ? <button onClick={toggleEditMode} className="ml-3 hover:underline">Edit</button>
                :
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" defaultValue={props.username} className="text-black border rounded-xl px-2 py-1"></input>
                        <button type="submit" className="bg-sky-600 hover:bg-sky-700 px-2 py-1 ml-2 text-white rounded-lg">Change</button>
                    </form>
            }
        </>
    );
}

export default ChangeUsername;