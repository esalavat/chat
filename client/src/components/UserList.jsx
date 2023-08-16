import React from "react";

const UserList = ({users}) => {
    return (
        <div className="bg-slate-100 h-full">
            <h2 className="bg-slate-300 px-3 py-2">
                Users:
            </h2>
            <ul className="px-3 py-2">
                {users.map((user) => (
                    <li>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;