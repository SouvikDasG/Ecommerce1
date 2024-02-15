import React, { useEffect } from "react";
import './Card.css'
import image from '../Assets/3.png'
function Card({proddi}){
    
    return(
        <div className="card">
            <img src={proddi.image} alt="Product Image"/>
            <h2>{proddi.title}</h2>
            <h3>{proddi.price}</h3>
            <div className="md:flex items-center"><div className="text-amber-400">★★★★</div><button>+</button></div>
        </div>)
}
export default Card;