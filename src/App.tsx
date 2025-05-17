import Card, {CardBody} from "./components/Card"
import List from "./components/List";

function App() {
  const listString = ['JavaScript', 'TypeScript', 'React', 'NodeJs'];
  
  return (
    <Card>
      <CardBody title="Hola React" text="Esto es un parrafo usando React"/>
      <List dataProps={listString}/>
    </Card>
  )

  // return <CardBody title="Hola React" text="Esto es un texto usando React"/>
}

export default App
