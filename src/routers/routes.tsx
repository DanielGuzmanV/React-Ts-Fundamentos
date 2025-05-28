import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LeadingPage from "../pages/LeadingPage";
import Saludar from "../pages/Saludo";
import Card from "../pages/Card";

function MyRoutes() {
  return (
    <Router>
      <Routes>

        {/* Lista de rutas: */}
        <Route path="/" element = {<LeadingPage/>}/>
        <Route path="/saludo" element = {<Saludar/>}/>
        <Route path="/card" element = {<Card/>}/>


      </Routes>
    </Router>
  )
}

export default MyRoutes;