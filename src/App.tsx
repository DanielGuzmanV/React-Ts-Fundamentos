import Card, {CardBody} from "./components/Card"
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  // Realizamos el "useState" para el button
  const [isLoading, setIsLoading] = useState(false);
  const changeHandleClick = () => setIsLoading(!isLoading);


  const listString = ['JavaScript', 'TypeScript', 'React', 'NodeJs'];
  // Agregar elementos a "listString2" si es necesario
  const listString2: string[] = [];
  
  const handleSelect1 = (selectElement: string) => {
    console.log('Se imprimio en consola:', selectElement)
  }
  const handleSelect2 = (selectElement: string) => {
    console.log('Mostrando:', selectElement)
  }

  const content = listString2.length !== 0 
    ? (<List dataProps={listString2} onSelect={handleSelect2}/>)
    : 'Primera lista sin elementos:'
  
  
  return (
    <Card>
      <CardBody title="Hola React" text="Esto es un parrafo usando React"/>
      {content}

      {/*  Podemos usar el "Short Circuit Operator" */}
      {listString.length !== 0 && (
        <List dataProps={listString} onSelect={handleSelect1}/>
      )}


      <Button isLoadingButton = {isLoading} onClickButton={changeHandleClick}>
        Hola react
      </Button>

    </Card>
  )

  // return <CardBody title="Hola React" text="Esto es un texto usando React"/>
}

export default App
