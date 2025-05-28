import { useNavigate } from "react-router-dom"

function ContentButtons() {

  const navigate = useNavigate();

  const handleSaludar = function(ruta: string) {
    navigate(ruta);
  }

  return (
    <ul style={{listStyle: 'none'}}>
      <li>
        <button onClick={ () => handleSaludar("/saludo")}>Saludar</button>
      </li>
      <li>
        <button onClick={ () => handleSaludar("/card")}>Tarjeta</button>
      </li>

    </ul>
  )
}

export default ContentButtons



