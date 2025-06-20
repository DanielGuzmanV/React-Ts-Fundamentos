import { useNavigate } from "react-router-dom"
import './MainExample.css'

function MainExample() {

  const navigateExample = useNavigate();

  const handleRoutes = (ruta: string) => {
    navigateExample(ruta);
  }

  return (
    <>
      <h1>Menu Ejemplos</h1>

      <div className="contentExample">
        <ul className="ulExample">
          <li>
            <button className="btnExample" onClick={() => handleRoutes('/example1')}>
              Ejemplo 1
            </button>
          </li>
        </ul>
      </div>


    </>
  )
}

export default MainExample