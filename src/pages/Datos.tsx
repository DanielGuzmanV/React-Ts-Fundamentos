
function Component_Datos() {
  const isReact = true;
  const objDatos = {
    nombre: 'Manuel',
    apellido: 'Montenegro',
    edad: 23,
  }
  
  return (
    <div>
      <h1>{isReact ? 'Estamos usando React': 'No estamos usando reacta'}</h1>
      <h2 style={{color: 'red'}}>Los datos del usuario son:</h2>

      <p>El nombre es: {objDatos.nombre}</p>
      <p>El apellido es: {objDatos.apellido}</p>
      <p>La edad es: {objDatos.edad}</p>

    </div>
  )
}

export default Component_Datos