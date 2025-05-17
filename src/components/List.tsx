import { useState } from "react";

type Props = {
  dataProps: string[];
}

function List({dataProps}: Props) {
  const [index, setIndex] = useState(0);

  const handleClick = (event: string, indice: number) => {
    setIndex(indice);
    console.log('Se preciono sobre:', event);
  }

  return (
    <ul className="list-group">
      {dataProps.map( (elementos, idx) => (
        <li onClick={ 
            () => handleClick(elementos, idx)
            } 
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