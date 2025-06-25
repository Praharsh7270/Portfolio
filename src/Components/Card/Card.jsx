import React from 'react'
import mern from "../../assets/mern.png"
import "./Card.css"
const Card = ({title , img}) => {
  return (
    <div>
        <div className="card">
            <h1>{title}</h1>
            <div className="hovercard">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Card