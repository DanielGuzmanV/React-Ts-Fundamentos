import { useNavigate } from "react-router-dom"

function ContentButtons() {

  const navigate = useNavigate();

  const handleSaludar = function(ruta: string) {
    navigate(ruta);
  }

  return (
    <div>
      <button onClick={ () => handleSaludar("/saludo")}>Saludar</button>

    </div>
  )
}

export default ContentButtons



