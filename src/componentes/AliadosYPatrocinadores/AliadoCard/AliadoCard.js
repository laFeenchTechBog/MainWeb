import React from 'react'
import './AliadoCard.css'

export default function AliadoCard(props) {
    return (
        <div className="Aliadocard">
            <img src={props.imgUrl} alt="logo" />
            <p className="Aliadocard__NombreEmpresa"> {props.nombreEmpresa} </p>
            <p> {props.descripcion} </p>
            <div className="Aliadocard-containerButton">
                <a href={props.url}>
                    <button>Más</button>
                </a>
            </div>
        </div>
    )
}
