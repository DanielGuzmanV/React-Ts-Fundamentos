import { useNavigate } from 'react-router-dom'
import '../components/ContentButtons.css'

function MainButtons() {

  const navigateMain = useNavigate();

  const hanldeRoutes = (ruta: string) => {
    navigateMain(ruta);
  }

  return (
    <div className='contentStyle'>
      <ul className='ulStyle'>
        <li>
          <button className='btnStyle' onClick={() => hanldeRoutes('/holaMundo')}>
            Fundamentos HolaMundo
          </button>
        </li>
        <li>
          <button className='btnStyle' onClick={() => hanldeRoutes('/codigo369')}>
            Fundamentos Codigo369
          </button>
        </li>
        <li>
          <button className='btnStyle' onClick={() => hanldeRoutes('/amazaing')}>
            Fundamentos AMazaing
          </button>
        </li>
        <li>
          <button className='btnStyle' onClick={() => hanldeRoutes('/mainExamples')}>
            Mini project
          </button>
        </li>
      </ul>

    </div>
  )
}

export default MainButtons