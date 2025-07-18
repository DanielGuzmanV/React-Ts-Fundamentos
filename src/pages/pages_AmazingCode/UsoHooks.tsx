import { useState } from "react"
import MenuHeader from "../../components/components_amazaing/MenuHeader";

function UsoHooks() {
  const [number, setNumber] = useState(0);
  const [nombreUser, setNombreUser] = useState('');

  // Funcion para aumentar el valor:
  const addValueNumber = (value: number = 1) => {
    setNumber(number + value)
  }
  // Funcion para eliminar el valor:
  const deleteValueNumber = () => {
    setNumber(0)
  }

  // Funcion para el nombre del usuario:
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setNombreUser(event.currentTarget.value)
  }

  return (
    <div style={{
      border: '2px solid black',
      padding: '10px',
      borderRadius: '10px'
    }}>
      <MenuHeader valuePar={number} valNumber={number} fnRestartValues={deleteValueNumber}/>

      <h3 onClick={() => {alert('Hola desde el alert con Ts');}}>
        Saludar desde un alert
      </h3>
      <h4>Numero: {number}</h4>
      <button style={{margin: '5px', padding: '5px'}} onClick={() => addValueNumber()}>Aumentar + 1</button>
      <button style={{margin: '5px', padding: '5px'}} onClick={() => addValueNumber(2)}>Aumentar + 2</button>

      <hr/>
      
      <h2>Formulario basico</h2>

      <h3>Nombre: {nombreUser}</h3>
      <input
        type="text"
        placeholder='Ingrese un nombre'
        value={nombreUser}
        onChange={handleInput}
      />


    </div>
  )
}

export default UsoHooks



