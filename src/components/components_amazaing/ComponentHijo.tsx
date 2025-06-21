interface objUser {
  name: string;
  lastName: string;
  age: number;
}


type Props = {
  message: string;
  title: string;
  user: objUser
}

function ComponentHijo({message, title, user}: Props) {


  return (
    <div>
      <p>Parrafo desde el componente hijo</p>

      <div style={{
        padding: '20px',
        backgroundColor: 'lightsalmon',
        borderRadius: '20px',
        margin: '10px'
      }}>
        <p>
          <b>{message}</b>
        </p> 
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: 'lightsalmon',
        borderRadius: '20px',
        margin: '10px'
      }}>

        <div>
          <p style={{color: 'blue', fontWeight: 'bold'}}>{title}</p>
        </div>

        <ul>
          <li>
            <b>Nombre: </b>
            <span>{user.name}</span>
          </li>
          <li>
            <b>Apellido: </b>
            <span>{user.lastName}</span>
          </li>
          <li>
            <b>Edad: </b>
            <span>{user.age}</span>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default ComponentHijo