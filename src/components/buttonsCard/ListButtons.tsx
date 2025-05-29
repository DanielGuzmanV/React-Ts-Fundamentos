import { useState } from "react";

type Props = {
  dataProps: string[];
  onSelect?: (elemento: string) => void;
}

function ListButtons({dataProps, onSelect}: Props) {

  // Codigo para seleccionar un elemento en la lista
  const [index, setIndex] = useState(0);
  const handleClick = (elemento: string, indice: number) => {
    setIndex(indice);
    onSelect?.(elemento);
  }
  // ==========================================================

  return (
    <ul
        style={{
          margin: '10px'
        }}
    >

      {dataProps.map( (elementos, idx) => (

        <li 
          onClick={() => handleClick(elementos, idx)} 
          key={elementos} 
          className={` ${index == idx ? "active" : ""}`}
        >
          {elementos}
        </li>
      ))}

    </ul>
  )
}

export default ListButtons