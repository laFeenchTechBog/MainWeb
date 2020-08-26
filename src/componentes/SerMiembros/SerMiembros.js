import React from 'react'
import miembro from '../../img/miembro.jpg'
import miembro2 from '../../img/miembro2.jpeg'
import './SerMiembros.css'

export default function SerMiembros() {
    return (
        <div>
            <div className="Sermiembros__main--Content">
                <div className="Sermiembros__main--Parte1">
                    <img
                        className="Sermiembros__main--img"
                        src={miembro}
                        alt="miembro"
                    />
                    <div className="Sermiembros__main--text">
                        <p className="Sermiembros__main--title">
                            ¿Quiénes son los miembros de La French Tech Bogotá?
                        </p>
                        <p>
                            Actores colombianos o franceses de tecnología{' '}
                            <span className="Sermiembros__main--span">*</span>{' '}
                            con intereses franceses o vínculos con Francia.
                            <br />
                            <br />
                            Pueden ser todo tipo de empresas (startups,
                            scaleups, pymes, empresas globales...),
                            organizaciones educativas, instituciones públicas o
                            privadas, independientes con proyectos, o
                            estudiantes de carreras relacionadas con la
                            tecnología, comunicación digital, etc. que se
                            encuentren en su último año de estudios…
                            <br />
                            <br />
                            <span className="Sermiembros__main--span">
                                *
                            </span>{' '}
                            <i className="Sermiembros__main--italic">
                                Actor del sector digital, de las TIC, de la
                                Transformación y de la Innovación Digital.
                            </i>
                        </p>
                    </div>
                </div>
                <div className="Sermiembros__main--Parte1">
                    <div className="Sermiembros__main--text">
                        <p className="Sermiembros__main--title">
                            ¿Perfil, qué esperamos de los miembros de La French
                            Tech Bogotá?
                        </p>

                        <ul>
                            <li>
                                Participar activamente en comités, iniciativas,
                                eventos…
                            </li>
                            <li>Ser embajadores de la marca French Tech</li>
                            <li>
                                Apoyar al desarrollo de la Comunidad French Tech
                            </li>
                        </ul>
                    </div>
                    <img
                        className="Sermiembros__main--img"
                        src={miembro2}
                        alt="segunda imagen de miembro"
                    />
                </div>
            </div>
        </div>
    )
}
