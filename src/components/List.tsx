type Props = {
  dataProps: string[];
}

function List({dataProps}: Props) {
  return (
    <ul className="list-group">
      {dataProps.map( (elementos) => (
        <li key={elementos} className="list-group-item">{elementos}</li>
      ))}

    </ul>
  )
}

export default List