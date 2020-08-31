import React from 'react'
import AcercaHeader from '../../img/join-us-bg.jpg'
import logo from '../../img/Logo fondo blanco.png'
import imagenDescripción from '../../img/miembro.jpg'
import './Acerca.css'

export default function Acerca() {
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
                <div className="Acerca__container--secondContainer" >

                </div>

                <p className="Acerca__container--title">
                    Algunas de nuestras misiones:
                </p>

                <ul>
                    <li>
                        Facilitar intercambios entre empresas francesas y/o
                        colombianas de tecnología en Colombia.
                    </li>
                    <li>
                        Brindar visibilidad a empresas tecnológicas francesas o
                        colombianas con socios franceses.
                    </li>
                    <li>
                        Favorecer contactos entre organizaciones públicas y
                        educativas con los miembros de La French Tech Bogotá.
                    </li>
                    <li>
                        Ser un punto de encuentro entre inversionistas y
                        empresas para explorar nuevas oportunidades en Colombia
                        o en Francia.
                    </li>
                    <li>
                        Ayudar a empresas colombianas/francesas de tecnología a
                        expandirse en Francia/Colombia.
                    </li>
                </ul>
            </div>
        </>
    )
}
