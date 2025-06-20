import { useEffect, useState } from 'react'
import './component_CardStyle.css'

function ComponentHooks() {

  // Usamos useState para incrementar:
  const [value, setValues] = useState(0);
  const incrementar = () => {
    setValues(value + 1);
  }
  useEffect(incrementar, []);
  
  // Usamos useState para decrementar:
  const decrementar = () => {
    if( value === 0) return;
    setValues(value - 1);
  }
  useEffect(decrementar, [])

  // Cambiamos el tema con useSate
  const [tema, setTema] = useState(false);
  const cambiarTema = () => {
    setTema(tema? false : true);
  }


  return (
    <div className={tema? 'on' : 'off'}>
      <h2>Uso de Hooks</h2>
      <h3>Numero: {value}</h3>
      <button 
        onClick={incrementar}
        style={{
          listStyle: 'none',
          margin: '10px',
          padding: '5px'
        }}
      >
        Incrementar
      </button>

      <button 
        onClick={decrementar}
        style={{
          listStyle: 'none',
          margin: '10px',
          padding: '5px'
        }}
      >
        Decrementar
      </button>

      <ul>
        <li style={{listStyle: 'none'}}>
          <button 
            onClick={cambiarTema}
            style={{
              margin: '10px',
              padding: '5px'
            }}
          >
            Cambiar Tema
          </button>
        </li>
      </ul>

    </div>
  )
}

export default ComponentHooks

