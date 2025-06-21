import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainHolaMundo from "../pages/pages_HolaMundo/MainHolaMundo";
import Saludar from "../pages/pages_HolaMundo/Saludo";
import CardView from "../pages/pages_HolaMundo/CardView";
import Card from "../pages/pages_HolaMundo/Card";
import CardButtonsView from "../pages/pages_HolaMundo/CardButtonsView";
import ButtonCustomView from "../pages/pages_HolaMundo/ButtonCustomView";
import MainCodigo369 from "../pages/pages_Codigo369/MainCodigo369";
import Datos from "../pages/pages_Codigo369/Datos"
import Usuario from "../pages/pages_Codigo369/Usuario";
import CardEstado from "../pages/pages_Codigo369/CardEstado";
import CardArray from "../pages/pages_Codigo369/cardArray"
import Hooks from "../pages/pages_Codigo369/Hooks";
import HomePage from "../pages/HomePage";
import MainExample from "../pages/pages_Examples/MainExample";
import MainExample1 from "../pages/pages_Examples/example-1/MainExample1";
import MainAmazingCode from "../pages/pages_AmazingCode/MainAmazaingCode";
import UsoHooks from "../pages/pages_AmazingCode/UsoHooks";

function MyRoutes() {
  return (
    <Router>
      <Routes>

        {/* Lista de rutas: */}
        <Route path="/" element = {<HomePage/>}/>

        {/* Rutas de HolaMundo */}
        <Route path="/holaMundo" element = {<MainHolaMundo/>}/>
        <Route path="/saludo" element = {<Saludar/>}/>
        <Route path="/card" element = {<Card/>}/>
        <Route path="/cardList" element = {<CardView/>}/>
        <Route path="/cardButton" element = {<CardButtonsView/>}/>
        <Route path="/buttonCustom" element = {<ButtonCustomView/>}/>

        {/* Rutas de Codigo369 */}
        <Route path="/codigo369" element = {<MainCodigo369/>}/>
        <Route path="/componentDatos" element = {<Datos/>}/>
        <Route path="/usuario" element = {<Usuario/>}/>
        <Route path="/cardEstado" element = {<CardEstado/>}/>
        <Route path="/cardArray" element = {<CardArray/>}/>
        <Route path="/hooks" element = {<Hooks/>}/>

        {/* Rutas de AMazaing */}
        <Route path="/amazaing" element = {<MainAmazingCode/>}/>
        <Route path="/usoHooks" element = {<UsoHooks/>}/>



        {/* Rutas de ejemplos */}
        <Route path="/mainExamples" element = {<MainExample/>}/>
        <Route path="/example1" element = {<MainExample1/>}/>


      </Routes>
    </Router>
  )
}

export default MyRoutes;