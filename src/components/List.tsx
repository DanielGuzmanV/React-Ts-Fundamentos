import { useState } from "react";

type Props = {
  dataProps: string[];
  onSelect?: (elemento: string) => void;
}

function List({dataProps, onSelect}: Props) {
  const [index, setIndex] = useState(0);

  const handleClick = (event: string, indice: number) => {
    
    setIndex(indice);

    onSelect?.(event);

  }

  return (
    <ul className="list-group" 
        style={{
          margin: '10px'
        }}
    >

      {dataProps.map( (elementos, idx) => (

        <li 
          onClick={() => handleClick(elementos, idx)} 
          key={elementos} 
          className={`list-group-item ${index == idx ? "active" : ""}`}
        >
          {elementos}
        </li>
      ))}

    </ul>
  )
}

export default List