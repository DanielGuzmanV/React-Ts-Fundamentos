import { useState } from "react";
import CardButtonCustom, { CardTitle } from "../../components/buttonCustom/CardButtonCustom"
import Button from "../../components/buttonCustom/Button";
import ListButtonCustom from "../../components/buttonCustom/ListButtonCuston";


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
  <CardButtonCustom>
    <CardTitle title="Botones dinamicos"/>

    <Button onClickButton={addHandleClick} isLoadingBtn = {false}>
      Agregar
    </Button>

    <Button onClickButton={deleteHandleClick} isLoadingBtn = {true}>
      Eliminar
    </Button>

    <ListButtonCustom dataProps={data} onSelect={handleSelect}/>

  </CardButtonCustom>
  )
}

export default ButtonCustomView