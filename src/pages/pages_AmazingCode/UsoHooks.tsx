import { useState } from "react"
import MenuHeader from "../../components/components_amazaing/MenuHeader";

function UsoHooks() {
  const [number, setNumber] = useState(0);
  const [nombreUser, setNombreUser] = useState('');

  // Funcion para saludar:
  const greatAlert = () => {
    alert('Hola desde el alert con Ts');
  }

  // Funcion para aumentar el valor:
  const addValueNumber = () => {
    setNumber(number + 1)
  }

  // Funcion para el nombre del usuario:
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setNombreUser(event.currentTarget.value)
  }

  

  return (
    <div>
      <MenuHeader valuePar={number}/>

      <h3 onClick={greatAlert}>
        Saludar desde un alert
      </h3>
      <h4>Numero: {number}</h4>
      <button onClick={addValueNumber}>Aumentar</button>

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



