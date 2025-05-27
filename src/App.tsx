import './App.css'
import MyRoutes  from './routers/routes'

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <header>
        <h1 className='title'>Main Principal</h1>
      </header>
      <MyRoutes/>
    </div>
  )
  

}


export default App
