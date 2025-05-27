import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ContentButtons from "../components/ContentButtons";
import Saludar from "../pages/Saludo";

function MyRoutes() {
  return (
    <Router>
      <Routes>

        {/* Lista de rutas: */}
        <Route path="/" element = {<ContentButtons/>}/>
        <Route path="/saludo" element = {<Saludar/>}/>


      </Routes>
    </Router>
  )
}

export default MyRoutes;