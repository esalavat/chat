import React from "react";
import Chats from "components/Chats";
import UserList from "components/UserList";

const ChatRoom = ({lines, users}) => {
    return (
        <div className="flex flex-row h-full">
            <div className="flex-auto overflow-y-auto h-full">
                <Chats lines={lines} />
            </div>
            <div className="flex-initial h-full">
                <UserList users={users} />
            </div>
        </div>
    );
};

export default ChatRoom;