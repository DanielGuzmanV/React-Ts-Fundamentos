import ComponentHijo from "../../components/components_amazaing/ComponentHijo"

type dateUser = {
  name: string;
  lastName: string;
  age: number;
}

function PropsPadreHijo() {
  // Solo enviamos los datos al componente hijo

  // Props para del padre para el hijo:
  const message: string = 'Mensaje desde el componente padre'
  const title: string = 'Objeto desde el componente padre'
  const objPerson: dateUser = {
    name: "Armando",
    lastName: "Muros",
    age: 25
  }

  return (
    <div>
      <h2>Uso de props | Padre a hijo</h2>
      <ComponentHijo 
        message={message}
        title={title}
        user={objPerson}
      />

    </div>
  )
}

export default PropsPadreHijo