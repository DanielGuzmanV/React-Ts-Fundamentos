import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LeadingPage from "../pages/LeadingPage";
import Saludar from "../pages/Saludo";
import CardView from "../pages/CardView";
import Card from "../pages/Card";
import CardButtonsView from "../pages/CardButtonsView";

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


      </Routes>
    </Router>
  )
}

export default MyRoutes;