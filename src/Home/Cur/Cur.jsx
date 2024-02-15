import React from "react";
import './Cur.css'
import Home from "../Home";
function Cur(props){
    let a = props.colorP
    return(<>
        <div className="curved-rectangle" style={{backgroundColor: a}} >
        <div className="content">
            <p>Your content goes here</p>
        </div>
    </div>
    </>)
}
export default Cur;