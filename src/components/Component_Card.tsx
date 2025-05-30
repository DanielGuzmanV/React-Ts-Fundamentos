import './Component_CardStyle.css'

type Props = {
  estado: boolean;
}

function Component_Card({estado}: Props) {
  return (
    <div className="card">
      <h1>Primer Card</h1>

      <p>Detalles de Card</p>
      <p className= {estado? 'on' : 'off'}>
        {estado? 'Card normal':'Card estado cambio'}
      </p>
    </div>
  )
}

export default Component_Card




