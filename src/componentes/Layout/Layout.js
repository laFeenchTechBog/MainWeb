
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navegation from "../Navegation/Navegation";
import Inicio from "../Inicio/Inicio";
import Acerca from "../Acerca/Acerca";
import SerMiembros from "../SerMiembros/SerMiembros";
import NuestrosServicios from "../NuestrosServicios/NuestrosServicios";
import ComoSerMiembro from "../ComoSerMiembro/ComoSerMiembro";
import AliadosYPatrocinadores from "../AliadosYPatrocinadores/AliadosYPatrocinadores"

import "./Layout.css"

function App() {

  return (		
  <Router> 
    <div className="App">
        <Navegation/>
        <Switch>
        <Route path="/" exact component={Inicio} />
		    <Route path="/Acerca"  component={Acerca} /> 
        <Route path="/Ser-miembros"  component={SerMiembros} /> 
        <Route path="/Como-ser-miembro"  component={ComoSerMiembro} /> 
        <Route path="/Nuestros-Servicios"  component={NuestrosServicios} /> 
        <Route path="/AliadosYPatrocinadores"  component={AliadosYPatrocinadores } /> 
        </Switch>
    </div>
  </Router>

  );
}

export default App;