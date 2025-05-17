import Card from "./components/Card"
import { CardBody } from "./components/Card"

function App() {
  return (
    <Card>
      <CardBody title="Hola React" text="Esto es un parrafo usando React"/>
    </Card>
  )

  // return <CardBody title="Hola React" text="Esto es un texto usando React"/>
}

export default App
