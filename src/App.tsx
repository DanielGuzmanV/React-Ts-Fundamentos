import Card, {CardTitle} from "./components/Card"
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const listString = ['JavaScript', 'TypeScript', 'React', 'NodeJs'];
  const [data, setData] = useState(listString);
  
  // Vemos el elemento seleccionado en consola:
  const handleSelect = (selectElement: string) => {
    console.log('Se imprimio en consola:', selectElement)
  }

  // Agregar elementos:
  const addHandleClick = () => {
    return setData([...data, 'Values React'])
  }
  // Eliminar elementos:
  const delHandleClick = () => {
    return setData(data.slice(0, -1));
  }
  
  return (
    <Card>
      <CardTitle title="Lista dinamica"/>

      <Button onClickButton={addHandleClick} isLoadingBtn = {false}>
        Agregar
      </Button>
      <Button onClickButton={delHandleClick} isLoadingBtn = {true}>
        Eliminar
      </Button>

      <List dataProps={data} onSelect={handleSelect}/>

    </Card>
  )

}

export default App
