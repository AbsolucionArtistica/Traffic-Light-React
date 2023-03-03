import React from "react";

function Luces({onClick, className}) {
    return(
        <div id="luces" onClick={onClick} className={className}></div>
    );
} 
export default Luces;