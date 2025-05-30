import { useNavigate } from "react-router-dom"
import '../components/ContentButtons.css'

function ContentButtons() {

  const navigate = useNavigate();

  const handleRoutes = function(ruta: string) {
    navigate(ruta);
  }

  return (
    <div className="contentStyle">
      <ul className="ulStyle">
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleRoutes("/saludo")}
          >
            Saludar
          </button>
        </li>
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleRoutes("/card")}
          >
            Tarjeta
          </button>
        </li>
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleRoutes("/cardList")}
          >
            Tarjeta - Listas
          </button>
        </li>
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleRoutes("/cardButton")}
          >
            Tarjeta - Buttons
          </button>
        </li>
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleRoutes("/buttonCustom")}
          >
            Buttons Custom
          </button>
        </li>
      </ul>
    </div>

  )
}

export default ContentButtons



