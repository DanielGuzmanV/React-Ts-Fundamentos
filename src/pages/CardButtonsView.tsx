import { useState } from "react";
import Button from "../components/buttonsCard/Button"
import CardButtonsBody, { CardButtonsTitle } from "../components/buttonsCard/CardButtonsBody"
import ListButtons from "../components/buttonsCard/ListButtons"


function CardButtonsView() {
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
    <CardButtonsBody>

    {/* Titulo: */}
    <CardButtonsTitle title="Botones"/>

    {/* Botones: */}
    <Button onClickButton={addHandleClick}>
      Agregar
    </Button>
    <Button onClickButton={deleteHandleClick}>
      Eliminar
    </Button>

    {/* Lista: */}
    <ListButtons dataProps={data} />

    </CardButtonsBody>
  )
}

export default CardButtonsView