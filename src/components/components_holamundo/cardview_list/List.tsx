import { useState } from "react";

type Props = {
  dataList: string[];
  onSelect?: (elemento: string) => void;
}

function List({dataList, onSelect}: Props) {
  const [index, setIndex] = useState(0);
  
  // Codigo para seleccionar un elemento en la lista
  const handleClick = (elemento: string, indice: number) => {
    setIndex(indice);
    onSelect?.(elemento);
  }
  // ==========================================================

  return (
    <ul className="list-group"
        style={{margin: '10px', padding: '20px'}}>

      {dataList.map( (elementos, idx) => (

        <li 
          onClick={() => handleClick(elementos, idx)} 
          key={elementos} 
          className={`list-group-item ${index == idx ? "active" : ""}`}
        >
          <span>{idx}. -{elementos}</span>
        </li>
      ))}

    </ul>
  )
}

export default List