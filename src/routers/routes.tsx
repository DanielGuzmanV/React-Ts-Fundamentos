import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LeadingPage from "../pages/LeadingPage";
import Saludar from "../pages/Saludo";
import CardView from "../pages/CardView";
import Card from "../pages/Card";
import CardButtonsView from "../pages/CardButtonsView";
import ButtonCustomView from "../pages/ButtonCustomView";

function MyRoutes() {
  return (
    <Router>
      <Routes>

        {/* Lista de rutas: */}
        <Route path="/" element = {<LeadingPage/>}/>
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