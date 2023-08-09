import React from "react";
import ChangeUsername from "./ChangeUsername";

const Username = (props) => {

    return (
        <div>
            Username: {props.username}
            <ChangeUsername username={props.username} changeUsername={props.changeUsername} />
        </div>
    );
}

export default Username;