import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainHolaMundo from "../pages/MainHolaMundo";
import Saludar from "../pages/Saludo";
import CardView from "../pages/CardView";
import Card from "../pages/Card";
import CardButtonsView from "../pages/CardButtonsView";
import ButtonCustomView from "../pages/ButtonCustomView";
import MainButtons from "../components/MainButtons";
import MainCodigo369 from "../pages/MainCodigo369";
import Datos from "../pages/Datos"
import Usuario from "../pages/Usuario";
import CardEstado from "../pages/CardEstado";
import CardArray from "../pages/CardArray";
import Hooks from "../pages/Hooks";

function MyRoutes() {
  return (
    <Router>
      <Routes>

        {/* Lista de rutas: */}
        <Route path="/" element = {<MainButtons/>}/>

        <Route path="/holaMundo" element = {<MainHolaMundo/>}/>
        <Route path="/saludo" element = {<Saludar/>}/>
        <Route path="/card" element = {<Card/>}/>
        <Route path="/cardList" element = {<CardView/>}/>
        <Route path="/cardButton" element = {<CardButtonsView/>}/>
        <Route path="/buttonCustom" element = {<ButtonCustomView/>}/>

        <Route path="/codigo369" element = {<MainCodigo369/>}/>
        <Route path="/componentDatos" element = {<Datos/>}/>
        <Route path="/usuario" element = {<Usuario/>}/>
        <Route path="/cardEstado" element = {<CardEstado/>}/>
        <Route path="/cardArray" element = {<CardArray/>}/>
        <Route path="/hooks" element = {<Hooks/>}/>


      </Routes>
    </Router>
  )
}

export default MyRoutes;