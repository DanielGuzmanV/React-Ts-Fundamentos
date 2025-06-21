import "./component_CardStyle.css"

// Creamos una lista de objetos:
type dataValue = {
  id: number;
  nombre: string;
  image: string;
  descripcion: string;
}

const pokemosArray: dataValue[] = [
  {
    id: 1,
    nombre: "bulbasaur",
    image: "https://i.ibb.co/6cWZPcWw/pngwing-com.png",
    descripcion: "Pokemon de tipo planta/veneno introducido en la primera generacion"
  },

  {
    id: 2,
    nombre: "charmander",
    image: "https://i.ibb.co/nq1vWwLw/pngwing-com-2.png",
    descripcion: "Pokemon de tipo fuego introducido en la primera generacion"
  },

  {
    id: 3,
    nombre: "pikachu",
    image: "https://i.ibb.co/7xHdLdf0/pngwing-com-1.png",
    descripcion: "Pokemon de tipo electrico introducido en la primera generacion"
  }

]

function Component_CardArray() {
  return (
    pokemosArray.map((items, idx) => {
      return (
        <div className="mycard" key={idx}>
          
          <h2 className="titleImg">{items.nombre}</h2>
          <img className="imagen" src={items.image} alt="Imagen_de_un_pokemon"/>
          
          <div className="description">
            <p>{items.descripcion}</p>
          </div>
        
        </div>
      )
    })
  )
}

export default Component_CardArray