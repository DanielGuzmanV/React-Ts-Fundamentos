import { useState } from "react";
import Button from "../components/Button";
import Card, { CardBody } from "../components/CardList"
import List from "../components/List";


function CardList() {

  // Arrays:
  const arrString1: string[] = ['JavaScript', 'Typescript', 'React', 'NodeJs'];
  const arrString2: string[] = [];
  
  // Funciones para seleccionar un elemento:
  const handleSelect1 = (selectElement: string) => {
    console.log('Se imprimio en consola:', selectElement)
  }
  const handleSelect2 = (selectElement: string) => {
    console.log('Mostrando:', selectElement)
  }

  // Verifcarmos con un ternario si la lista esta vacia o no:
  const contentValue = arrString2.length !== 0
  ? (< List dataProps={arrString2} onSelect={handleSelect2}/>)
  : (<p>Primera lista sin elementos</p>)

  // Realizamos un "useState" para el button:
  const [isLoading, setIsLoading] = useState(false);
  const changeHandleClick = function() {
    return setIsLoading(!isLoading);
  }

  return (
    < Card>
      
      <CardBody title="Listas en React" text="Uso de listas basicas en React"/>

      {contentValue}

      {/* Tambien podemos usar "short circuit operator" */}
      {arrString1.length !== 0 && (
        < List dataProps={arrString1} onSelect={handleSelect1}/>
      )}

      < Button isLoadingButton={isLoading} onClickButton={changeHandleClick}>
        Enviar datos
      </Button>

    </Card>
  )
}

export default CardList