import Card, {CardBody} from "./components/Card"
import List from "./components/List";

function App() {
  const listString = ['JavaScript', 'TypeScript', 'React', 'NodeJs'];
  
  // Agregar elementos a "listString2" si es necesario
  const listString2: string[] = [];
  
  const handleSelect1 = (selectElement: string) => {
    console.log('Se imprimio en consola:', selectElement)
  }

  const handleSelect2 = (selectElement: string) => {
    console.log('Mostrando:', selectElement)
  }

  // Podemos usar el "Short Circuit Operator"
  const content = listString.length !== 0 && (
    <List dataProps={listString} onSelect={handleSelect1}/>
  );

  return (
    <Card>
      <CardBody title="Hola React" text="Esto es un parrafo usando React"/>
      {content}

      {listString2.length !== 0 
        ? (<List dataProps={listString2} onSelect={handleSelect2}/>)
        : 'Lista sin elementos'
      }
    </Card>
  )

  // return <CardBody title="Hola React" text="Esto es un texto usando React"/>
}

export default App
