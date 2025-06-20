import Component_Usuario from "../../components/components_codigo369/Component_Usuario"

function Usuario() {
  return (
    <div>
      <Component_Usuario 
        nombre="Marcelo"
        apellido="Garcia"
        edad={34}
        direccion={{
          calle: "Av Siempre viva",
          ciudad: "Springfield",
        }}
      />
    </div>
  )
}

export default Usuario