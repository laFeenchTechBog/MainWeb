import React from 'react'
import './MiembroJunta.css'

export default function MiembroJuanta(props) {
    return (
        <div className="MiembroJunta__container">
            <div className="MiembroJunta__container--img">
                <img src={props.foto} alt="foto de miembro de la junta" />
            </div>
            <div className="MiembroJunta__container--text">
                <p className="MiembroJunta__container--text--primerTexto">{props.nombre}</p>
                <p className="MiembroJunta__container--text--segundoTexto">{props.cargo}</p>
                <p className="MiembroJunta__container--text--terceroTexto">{props.empresa}</p>
            </div>
        </div>
    )
}
