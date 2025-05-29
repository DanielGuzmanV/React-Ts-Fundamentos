import { useState } from "react";
import Card, { CardTitle } from "./Card"
import Button from "./Button";
import List from "./Button/List";


function ButtonCustomView() {
  const arrStrinValues = ['JavaScript', 'TypeScript', 'React', 'NodeJs'];

  const [data, setData] = useState(arrStrinValues);

  const handleSelect = function(selectElem: string) {
    alert(`Elemento: ${selectElem}`);
  }

  // Agregar elementos:
  const addHandleClick = () => {
    return setData([...data, 'Value React']);
  }

  // Eliminar elementos:
  const deleteHandleClick = () => {
    return setData(data.slice(0, -1));
  }


  return (
  <Card>
    <CardTitle title="Botones dinamicos"/>

    <Button onClickButton={addHandleClick} isLoadingBtn = {false}>
      Agregar
    </Button>

    <Button onClickButton={deleteHandleClick} isLoadingBtn = {true}>
      Eliminar
    </Button>

    <List dataProps={data} onSelect={handleSelect}/>

  </Card>
  )
}

export default ButtonCustomView