import ComponentCardEstadoy from "../components/Component_CardEstado"


function CardEstado() {
  return (
    <div>
      {/* Podemos cambiar el estado por true o false */}
      <ComponentCardEstadoy estado = {false}/>
    </div>
  )
}

export default CardEstado