import { useState } from "react"
import './MenuHeader.css'

interface Props {
  valuePar: number
  valNumber: number
  fnRestartValues: ()=> void 
}

function MenuHeader({valuePar, valNumber, fnRestartValues}: Props) {
  const [changeColor, setChangeColor] = useState(false);
  const [numberParrafo, setNumberParrafo] = useState(0);

  const isPar = (Date: number) => {
    if(Date % 2 === 0) {
      return Date
    } else {return 0}
  }

  const viewNumbers = () => {
    setNumberParrafo(numberParrafo + valNumber);
  }

  const subtractNumber = () => {
    setNumberParrafo(numberParrafo - 1);
  }

  return (
    <div className="contentTitle">
      <div onClick={() => setChangeColor(!changeColor)}>
        <header style={{backgroundColor: changeColor? 'red': 'yellow', padding: '8px', borderRadius: '10px'}}>
          <h2 className="firstComponent">El numero es: {isPar(valuePar)? 'Par': 'Impar'} = {isPar(valuePar)}</h2>
        </header>
      </div>

      <p>Parrafo numero: <b>{valNumber}</b> del componente</p>

      <button onClick={fnRestartValues}>
        Reiniciar valor
      </button>

      <hr/>

      <p>Numeros del componente: <b>{numberParrafo}</b></p>

      <div style={{
        padding: '10px',
      }}>
        <button onClick={viewNumbers}>
          add values
        </button>

        <button onClick={subtractNumber}>
          restar values
        </button>
      </div>

    </div>

  )
}

export default MenuHeader