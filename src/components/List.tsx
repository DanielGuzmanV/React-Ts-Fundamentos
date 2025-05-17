type Props = {
  dataProps: string[];
}

function List({dataProps}: Props) {

  const handleClick = (event: string) => {
    console.log('Se preciono sobre:', event);
    alert(event);
  }

  return (
    <ul className="list-group">
      {dataProps.map( (elementos) => (
        <li onClick={ () => handleClick(elementos)} key={elementos} className="list-group-item">
          {elementos}
        </li>
      ))}

    </ul>
  )
}

export default List