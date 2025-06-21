import { useState } from "react"
import ComponentCardEstadoy from "../../components/components_codigo369/Component_CardEstado"

function CardEstado() {
  const [valueBool, setValueBool] = useState(false);

  const handleValueBool = () => {
    setValueBool(!valueBool);
  }

  return (
    <div>
      {/* Podemos cambiar el estado por true o false */}
      <ComponentCardEstadoy estado = {valueBool} fnChangeValue={handleValueBool}/>
    </div>
  )
}

export default CardEstado