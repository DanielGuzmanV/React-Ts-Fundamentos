import { useState } from "react"

interface Props {
  valuePar: number
}


function MenuHeader({valuePar}: Props) {
  const [value, setValue] = useState(false);

  const isPar = (value: number) => {
    if(value % 2 === 0) {
      return value
    } else {return 0}
  }


  return (

    <div onClick={() => setValue(!value)}>
      <header style={ value? {backgroundColor: 'green'}: {backgroundColor: 'red'}}>
        <h2 style={{color: 'white'}}>Componente Header Pares - {isPar(valuePar)}</h2>
      </header>
    </div>
  )
}

export default MenuHeader