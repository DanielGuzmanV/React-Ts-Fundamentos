import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ContentButtons from "../components/ContentButtons";

function MyRoutes() {
  return (
    <Router>
      <Routes>

        {/* Lista de rutas: */}
        <Route path="/" element = {<ContentButtons/>}/>


      </Routes>
    </Router>
  )
}

export default MyRoutes;