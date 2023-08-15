import React, { Children } from "react";

const Layout = ({children}) => {
    return ( 
        <div className="mx-auto">
            {children}
        </div>
    );
};

export default Layout;