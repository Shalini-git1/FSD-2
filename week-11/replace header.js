import React from "react";
import "./Header.scss";
function Header(props){
    return(
        <div className="header">
            {/*Function component*/}
            <h1>{props.title}</h1>
            <p>Props + State + Events + Styling</p>
            </div>
    );
} 
export default Header;
