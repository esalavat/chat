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
                ? <button onClick={toggleEditMode}>Change Username</button>
                :
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" defaultValue={props.username}></input>
                        <button type="submit">Change</button>
                    </form>
            }
        </>
    );
}

export default ChangeUsername;