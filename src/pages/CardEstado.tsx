import Component_Card from "../components/Component_Card"


function CardEstado() {
  return (
    <div>
      {/* Podemos cambiar el estado por true o false */}
      <Component_Card estado = {false}/>
    </div>
  )
}

export default CardEstado