import { useState } from "react";
import CardButtonCustom, { CardTitle } from "../../components/components_holamundo/buttonCustom/CardButtonCustom"
import Button from "../../components/components_holamundo/buttonCustom/Button/Buttons";
import ListButtonCustom from "../../components/components_holamundo/buttonCustom/ListButtonCuston";


function ButtonCustomView() {
  const listStringValues = ['JavaScript', 'TypeScript', 'React', 'NodeJs'];

  const [dataList, setData] = useState(listStringValues);

  const handleSelect = function(selectElem: string) {
    alert(`Elemento: ${selectElem}`);
  }

  // Agregar elementos:
  const addHandleClick = () => {
    return setData([...dataList, 'Value React']);
  }

  // Eliminar elementos:
  const deleteHandleClick = () => {
    return setData(dataList.slice(0, -1));
  }

  // Color buttons:
  const [isBool, setIsBool] = useState(false);

  const changeValueBool = () => {
    setIsBool(!isBool);
  }


  return (
  <CardButtonCustom>
    <CardTitle title="Botones dinamicos"/>

    <Button onClickButton={addHandleClick} isLoadingBtn = {isBool} fnIsBool={changeValueBool}>
      Agregar
    </Button>

    <Button onClickButton={deleteHandleClick} isLoadingBtn = {!isBool} fnIsBool={changeValueBool}>
      Eliminar
    </Button>

    <ListButtonCustom dataProps={dataList} onSelectAlert={handleSelect}/>

  </CardButtonCustom>
  )
}

export default ButtonCustomView