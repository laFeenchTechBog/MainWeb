import React from 'react'
import "./Mision.css"

export default function Mision(props) {
    return (
        <div className="mision__content">
            <img src={props.foto} alt="logo de misión" />
            <p>{props.texto}</p>
        </div>
    )
}
