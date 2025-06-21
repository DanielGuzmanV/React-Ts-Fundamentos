import './Component_CardStyle.css'

type Props = {
  estado: boolean;
  fnChangeValue: () => void;
}

function ComponentCardEstado({estado, fnChangeValue}: Props) {
  return (
    <div className="mycard">
      <h1>Primer Card</h1>

      <p>Detalles de Card</p>
      <p className= {estado? 'on' : 'off'}>
        {estado? 'Card normal':'Card estado cambio'}
      </p>

      <button onClick={fnChangeValue}
      className='btn btn-secondary'>
        cambiar
      </button>
    </div>
  )
}

export default ComponentCardEstado




