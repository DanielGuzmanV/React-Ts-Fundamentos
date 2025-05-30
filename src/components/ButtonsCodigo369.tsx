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
        <li>
          <button className="btnStyle" onClick={() => handleRoutes('/usuario')}>
            Datos - Usuario
          </button>
        </li>
        <li>
          <button className="btnStyle" onClick={() => handleRoutes('/cardEstado')}>
            Card - Estado
          </button>
        </li>
        <li>
          <button className="btnStyle" onClick={() => handleRoutes('/cardArray')}>
            Card - Array
          </button>
        </li>
        <li>
          <button className="btnStyle" onClick={() => handleRoutes('/hooks')}>
            Hooks - basic
          </button>
        </li>
        
      </ul>
    </div>
  )
}

export default ButtonsCodigo369