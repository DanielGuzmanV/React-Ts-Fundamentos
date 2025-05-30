// En los parametros de la funcion podemos poner lo siguiente
// Component_Users({nombre: string, apellido: string, edad: number}) o simplemente 
// Component_Users(props)
// Ya que props se comporta como un objeto


type Props = {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: {
    calle: string;
    ciudad: string;
    numero?: number;
  }
}

function Component_Usuario({nombre, apellido, edad, direccion}: Props) {
  return (
    <div>
      <h2 style={{color: 'red'}}>Uso de props</h2>
      
      <h4 style={{color: 'blue'}}>Datos:</h4>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Edad: {edad}</p>

      <h4 style={{color: 'blue'}}>Direccion:</h4>
      <p>Calle: {direccion.calle}</p>
      <p>Ciudad: {direccion.ciudad}</p>

    </div>
  )
}

export default Component_Usuario








