import { useNavigate } from "react-router-dom"
import '../components/ContentButtons.css'

function ButtonsCodigo369() {
  const navigateButtons = useNavigate();

  const handleRoutes = (routes: string) => {
    navigateButtons(routes);
  }
  
  return (
    <div className="contentStyle">
      <ul className="ulStyle">
        <li>
          <button className="btnStyle" onClick={() => handleRoutes('/componentDatos')}>
            Datos
          </button>
        </li>
        
      </ul>
    </div>
  )
}

export default ButtonsCodigo369