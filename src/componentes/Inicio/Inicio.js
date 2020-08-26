import React, { useEffect } from 'react'
import { client } from '../../context/AppContext'
import ImagenInicio from '../../img/PHOTOSITE-min.jpg'
import Logo from '../../img/FTB_LOGOVILLE_LOGO_BOGOTA-(1).png'
import facebook from '../../img/facebook.svg'
import intagram from '../../img/instagram-sketched.svg'
import linkedin from '../../img/linkedin.svg'
import Aliados from "../../img/logos.png";
import './Inicio.css'

export default function Inicio() {
   const [data, setData] = useState([])
    useEffect(() => {
        client
            .getEntries()
            .then((res) => {
                console.log(res.items[1].fields.titulo)
                //setData(res.items)
            })
            .catch(console.error())
    }, [])

    return (
        <>
            <div className="Inicio">
                <div className="Inicio--primerBloque">
                    <img
                        className="ImagenInicio"
                        src={ImagenInicio}
                        alt="img"
                    />
                    <div className="Inicio--primerBloque__container">
                        <div>
                            <img
                                className="Inicio--primerBloque__img"
                                src={Logo}
                                alt=""
                            />
                            <p className="Inicio--primerBloque__img--title">
                                ¿Qué es La FRENCH TECH?
                            </p>
                        </div>

                        <p>
                            La French Tech es una comunidad global que
                            contribuye a hacer de Francia un país donde las
                            iniciativas de tecnología y empresas emergentes
                            pueden nacer, crecer y convertirse en compañías
                            exitosas.
                        </p>
                        <p>
                            La French Tech está conformada por varias
                            comunidades locales de tecnología francesa, ubicadas
                            en Francia y en el extranjero. Estas comunidades son
                            nodos que reúnen a actores empresariales y públicos
                            de todo tipo (startups, empresas globales,
                            universidades, independientes…) para fomentar un
                            ecosistema que trabaja por el éxito de la innovación
                            mediante la promoción de intercambios y reuniones.
                        </p>
                    </div>
                </div>
            </div>
            <div className="home__banner--gradiente">
                <div className="home__banner--gradiente--content">
                    <p className="home__banner--gradiente--Title">
                        Comunidad French Tech
                    </p>
                    <div className="redes-container">
                        <div className="redes">
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className="redes">
                            <img src={intagram} alt="Intagram" />
                        </div>
                        <div className="redes">
                            <img src={linkedin} alt="facebook" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="container" >
                <img id="marcas" src={Aliados} alt="slider logos" />
            </div>
        </>
    )
}
