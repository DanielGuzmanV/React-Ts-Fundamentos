import {useEffect, type ReactNode } from "react";

type listAnimal = {
  id: number;
  name: string;
  image: string;
}

interface Props {
  children: ReactNode;
  onEnviarObjAnimal: (animales: listAnimal[]) => void
}

const objAnimals: listAnimal[] = [
  {
    id: 1,
    name: 'Perro',
    image: 'https://media.tenor.com/ZJT4S4lpfpIAAAAM/perro-bailando.gif',
  },
  {
    id: 2,
    name: 'Gato',
    image: 'https://hips.hearstapps.com/hmg-prod/images/gato-bailando-1550658206.gif',
  },
  {
    id: 3,
    name: 'Sapo',
    image: 'https://gifdb.com/images/high/futurama-412-x-234-gif-ufevae6107fdcqg3.gif',
  },

]



function RenderListAnimal({onEnviarObjAnimal, children}: Props) {

  useEffect( () => {
    onEnviarObjAnimal(objAnimals);
  })

  return (
    <ul style={{listStyle: 'none'}}>
      {children}
    </ul>
  )
}

export default RenderListAnimal