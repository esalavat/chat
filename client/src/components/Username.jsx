import React from "react";
import ChangeUsername from "components/ChangeUsername";

const Username = (props) => {

    return (
        <div className="bg-slate-500 text-white p-2 shadow-lg">
            <label>Username: {props.username}</label>
            <ChangeUsername username={props.username} changeUsername={props.changeUsername} />
        </div>
    );
}

export default Username;