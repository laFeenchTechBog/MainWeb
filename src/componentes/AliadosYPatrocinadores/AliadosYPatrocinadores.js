import React, { useEffect, useState } from 'react';
import Aliados from "../../img/logos.png";
import AliadoCard from "./AliadoCard/AliadoCard"

import "./Aliados.css";
import { client } from '../../context/AppContext'


export default function AliadosYPatrocinadores() {


        const [aliados, setAliados] = useState([])
        useEffect(() => {
            client
                .getEntries()
                .then((res) => {
                    const filtro = res.items.filter( item => item.sys.contentType.sys.id === "miembros")
                    console.log(filtro)
                    setAliados(filtro)
                })
                .catch(console.error())
        }, [])

   

    return (
        <div className="Aliados__Content">
            <div id="container" >
                <img id="marcas" src={Aliados} alt="slider logos" />
            </div>

            {aliados.map( aliado =>{
                return <AliadoCard  nombreEmpresa={aliado.fields.nombreEmpresa} imgUrl={aliado.fields.icono.fields.file.url} descripcion={aliado.fields.descripcin} url={aliado.fields.url} />
            })} 
        </div>
    )
}
