import React, { useEffect } from "react";
import './Card2.css'
function Card2({proddi}){
    
    return(
        <div className="card2">
            <img src={proddi.image} alt="Product Image"/>
            <div className="inf">
            <h2>{proddi.title}</h2>
            <h3>{proddi.price}</h3>
            <div className="md:flex items-center"><div className="text-amber-400">★★★★</div><button>+</button></div></div>
        </div>)
}
export default Card2;