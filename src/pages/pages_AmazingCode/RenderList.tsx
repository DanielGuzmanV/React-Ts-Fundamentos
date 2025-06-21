import { useState } from "react";
import RenderListAnimal from "../../components/components_amazaing/RenderListAnimal";

// Lista de pelicutas:
const listMovies: string[] = ['Rango', 'Monster House', 'Spider-man', 'El gato con botas']

interface listAnimal {
  id: number;
  name: string;
  image: string;
}

function RenderList() {
  const [objAnimal, setObjAnimal] = useState<listAnimal[]>([])

  const recibirAnimales = (animales: listAnimal[]) => {
    setObjAnimal(animales);
  }

  const movies = listMovies.map((valueMovie, index) => {
    return (
      <li key={index}>
        <p>{valueMovie}</p>
      </li>
    )
  })

  return (
    <div>
      <h2>Renderizado de listas</h2>
      <div style={{backgroundColor:'lightgreen', padding: '20px'}}>
        <h4>Renderizado lista de peliculas</h4>
        <ol>
          {movies}
        </ol>
      </div>

      <br/>

      <div>
        <h4>Renderizado lista de objetos</h4>
        <RenderListAnimal onEnviarObjAnimal={recibirAnimales}>
          {objAnimal.map((value) => (
            <li key={value.id}>
              <div style={{
                padding: '100px;', 
                margin: '50px',
                border: '2px solid black', 
                borderRadius: '10px', 
                backgroundColor: 'lightgray'
              }}>
                <h3>{value.name}</h3>
                <img src={value.image} alt="Imagen de animal" width={300}/>
              </div>
            </li>
          ))}
        </RenderListAnimal>
      </div>

    </div>
  )
}

export default RenderList