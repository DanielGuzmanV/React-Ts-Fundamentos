import { useNavigate } from "react-router-dom"
import '../components/ContentButtons.css'

function ContentButtons() {

  const navigate = useNavigate();

  const handleSaludar = function(ruta: string) {
    navigate(ruta);
  }

  return (
    <div className="contentStyle">
      <ul className="ulStyle">
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleSaludar("/saludo")}
          >
            Saludar
          </button>
        </li>
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleSaludar("/card")}
          >
            Tarjeta
          </button>
        </li>
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleSaludar("/cardList")}
          >
            Tarjeta - Listas
          </button>
        </li>
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleSaludar("/cardButton")}
          >
            Tarjeta - Buttons
          </button>
        </li>
        <li>
          <button 
            className="btnStyle"
            onClick={ () => handleSaludar("/buttonCustom")}
          >
            Buttons Custom
          </button>
        </li>
      </ul>
    </div>

  )
}

export default ContentButtons



