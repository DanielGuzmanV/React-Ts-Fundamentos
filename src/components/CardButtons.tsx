import { useState } from "react";
import Button from "./Button"
import Card, { CardTitle } from "./Card"
import List from "./List"


function CardButtons() {
  const listString: string[] = ['Javascript', 'Typescript', 'React', 'NodeJs'];

  const [data, setDataList] = useState(listString);

  // Agregamos elementos a la lista:
  const addHandleClick = () => {
    return setDataList([...data, 'new value']);
  }

  // Eliminamos los elementos de la lista:
  const deleteHandleClick =() => {
    return setDataList(data.slice(0, -1));
  }


  return (
    <Card>

    {/* Titulo: */}
    <CardTitle title="Botones"/>

    {/* Botones: */}
    <Button onClickButton={addHandleClick}>
      Agregar
    </Button>
    <Button onClickButton={deleteHandleClick}>
      Eliminar
    </Button>

    {/* Lista: */}
    <List dataProps={data} />

    </Card>
  )
}

export default CardButtons