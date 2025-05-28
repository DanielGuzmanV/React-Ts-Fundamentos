
import './App.css'
import MyRoutes  from './routers/routes'

function App() {
  return (
    <div className="divBody">
      <header>
        <h1 className='title'>Main Principal</h1>
      </header>
      <MyRoutes/>
    </div>
  )
  

  // return <CardBody title="Hola React" text="Esto es un texto usando React"/>
}


export default App
