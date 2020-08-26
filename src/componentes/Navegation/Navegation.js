
import React from 'react';
import {Link} from "react-router-dom"

import logo from "../../img/logo-sticky.svg"
import "./Navegation.css"


export default function Navegation() {
    return (
        <div className="Navegation" >
            <Link className="link" to="/"><img src={logo} /></Link>
            <Link className="link" to="/Acerca">Acerca</Link>
            <Link className="link" to="/Nuestros-Servicios">Nuestros Servicios</Link> 
            <Link className="link" to="/Ser-miembros">Ser Miembros</Link> 
            <Link className="link" to="/AliadosYPatrocinadores">Aliados & Patrocinadores</Link>
        </div>
    )
}


