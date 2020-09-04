import React, { useEffect, useState } from 'react'
import AcercaHeader from '../../img/join-us-bg.jpg'
import logo from '../../img/Logo fondo blanco.png'
import imagenDescripción from '../../img/miembro.jpg'
import MiembroJunta from './MiembroJunta/MiembroJuanta'

import { client } from '../../context/AppContext'
import './Acerca.css'
import Mision from './Mision/Mision'

export default function Acerca() {
    const [junta, setJunta] = useState([])
    const [mision, setMision] = useState([])
    useEffect(() => {
        client
            .getEntries()
            .then((res) => {
                const filtro_junta = res.items.filter(
                    (item) => item.sys.contentType.sys.id === 'juntaDirectiva'
                )
                const filtro_vision = res.items.filter(
                    (item) => item.sys.contentType.sys.id === 'misiones'
                )
                
                setJunta(filtro_junta)
                setMision(filtro_vision)
            })
            .catch(console.error())
    }, [])

    return (
        <>
            <img
                className="Acerca__header"
                src={AcercaHeader}
                alt="Acerca Header"
            />

            <div className="Acerca__header--title">
                {' '}
                <span>
                    {' '}
                    <img src={logo} alt="logo" />{' '}
                </span>{' '}
                ACERCA DE{' '}
                <span className="Acerca__header--title-pink">
                    LA FRENCH TECH BOGOTÁ
                </span>{' '}
            </div>

            <div className="Acerca__container">
                <div className="Acerca__container--firstContainer">
                    <p>
                        <span className="Acerca__container--span">
                            La French Tech Bogotá
                        </span>{' '}
                        nació en Mayo 2020 y tiene como ambición reunir una
                        comunidad French Tech en Bogotá y en Colombia en
                        general. En su desarrollo, La French Tech Bogotá desea
                        facilitar intercambios entre miembros, organizar eventos
                        y participar de manera activa en el desarrollo del
                        ecosistema de empresas de tecnología en Colombia y en
                        Francia.
                    </p>
                    <img src={imagenDescripción} alt="imagen descripcion" />
                </div>
                <div className="Acerca__container--titulo">
                    <div className="Acerca__container--barratitulo"></div>
                    <h1 className="Acerca__container--textotitulo">
                        MIEMBROS <span>DE LA JUNTA</span>{' '}
                    </h1>
                </div>
                <div className="Acerca__container--secondContainer">
                    {junta.map((aliado) => {
                        return (
                            <MiembroJunta
                                key={aliado.sys.id}
                                nombre={aliado.fields.nombre}
                                cargo={aliado.fields.cargo}
                                empresa={aliado.fields.empresa}
                                foto={aliado.fields.foto.fields.file.url}
                            />
                        )
                    })}
                </div>

                <div className="Acerca__container--titulo">
                    <div className="Acerca__container--barratitulo"></div>
                    <h1 className="Acerca__container--textotituloMision">
                   ALGUNAS<span>  DE NUESTRAS MISIONES</span>{' '}
                    </h1>
                </div>
                <div className="Acerca__container--tercerContainer">
                    {mision.map((misionItem) => {
                        return (
                            <Mision
                            key={misionItem.sys.id}
                            texto={misionItem.fields.texto}
                            foto={misionItem.fields.iconoMision.fields.file.url}
                            />
                        )
                    })}
                </div>

                
            </div>
        </>
    )
}
