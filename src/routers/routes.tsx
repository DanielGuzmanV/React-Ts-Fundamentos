import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainHolaMundo from "../pages/MainHolaMundo";
import Saludar from "../pages/Saludo";
import CardView from "../pages/CardView";
import Card from "../pages/Card";
import CardButtonsView from "../pages/CardButtonsView";
import ButtonCustomView from "../pages/ButtonCustomView";
import MainButtons from "../components/MainButtons";

function MyRoutes() {
  return (
    <Router>
      <Routes>

        {/* Lista de rutas: */}
        <Route path="/" element = {<MainButtons/>}/>
        <Route path="/holaMundo" element = {<MainHolaMundo/>}/>
        <Route path="/codigo369" element = {<MainHolaMundo/>}/>

        <Route path="/saludo" element = {<Saludar/>}/>
        <Route path="/card" element = {<Card/>}/>
        <Route path="/cardList" element = {<CardView/>}/>
        <Route path="/cardButton" element = {<CardButtonsView/>}/>
        <Route path="/buttonCustom" element = {<ButtonCustomView/>}/>


      </Routes>
    </Router>
  )
}

export default MyRoutes;