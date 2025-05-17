import Card, {CardBody} from "./components/Card"
import List from "./components/List";

function App() {
  const listString = ['JavaScript', 'TypeScript', 'React', 'NodeJs'];
  
  const handleSelect1 = (selectElement: string) => {
    console.log('Se imprimio en consola:', selectElement)
  }

  const handleSelect2 = (selectElement: string) => {
    console.log('Mostrando:', selectElement)
  }

  return (
    <Card>
      <CardBody title="Hola React" text="Esto es un parrafo usando React"/>
      <List dataProps={listString} onSelect={handleSelect1}/>
      <List dataProps={listString} onSelect={handleSelect2}/>
    </Card>
  )

  // return <CardBody title="Hola React" text="Esto es un texto usando React"/>
}

export default App
