import { useNavigate } from "react-router-dom"
import '../components/ContentButtons.css'

function ButtonsAmazaingcode() {
  const navigateButtons = useNavigate();

  const handleRoutes = (rutas: string) => {
    navigateButtons(rutas)
  }

  return (
    <div className="contentStyle">
      <ul className="ulStyle">
        <li>
          <button className="btnStyle" onClick={() => handleRoutes('/usoHooks')}>
            Uso de Hooks
          </button>
        </li>
        <li>
          <button className="btnStyle" onClick={() => handleRoutes('/renderList')}>
            Render listas
          </button>
        </li>
        <li>
          <button className="btnStyle" onClick={() => handleRoutes('/propsPH')}>
            Props Padre a Hijo
          </button>
        </li>

      </ul>

    </div>
  )
}

export default ButtonsAmazaingcode