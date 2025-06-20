import { useState } from "react"
import ComponentForm from "../../../components/components_examples/example-1/FormValue"
import TareasAdd from "../../../components/components_examples/example-1/TareasAdd"
import TareasCompleted from "../../../components/components_examples/example-1/TareasCompleted"
import styled from "./MainExample1.module.css"


export interface TareaList {
  id: number;
  texto: string;
}

function MainExample1() {
  const [tareas, setTareas] = useState<TareaList[]>([]);
  const [completed, setCompleted] = useState<TareaList[]>([]);

  const agregarTareas = (texto: string) => {
    const nuevaTarea: TareaList = {
      id: Date.now(),
      texto
    };

    setTareas([...tareas, nuevaTarea])
  };

  const eliminarTareas = (id: number) => {
    setTareas(tareas.filter(value => value.id !== id));
  }

  const completarTareas = (id: number) => {
    const newTarea = tareas.find(value => value.id === id);
    if(!newTarea) return;

    // Eliminamos una tarea activa:
    setTareas(tareas.filter(t => t.id !== id))

    // Agregamos la tarea a completadas:
    setCompleted([...completed, newTarea]);
  }


  return (
    <div className={styled.contentDiv}>
      <h1 className={styled.titleDiv}>Gestor de tareas</h1>
      {/* Formulario: */}
      <ComponentForm onAgregarTarea={agregarTareas}/>

      {/* Tareas agregadas: */}
      <div>
        <h2>Tareas:</h2>
        <TareasAdd 
          tareas={tareas} 
          onEliminarTareas={eliminarTareas}
          onCompletarTareas={completarTareas}
        />
      </div>

      {/* Tareas completadas: */}
      <div>
        <h2>Tareas Completadas:</h2>
        <TareasCompleted tareas={completed}/>
      </div>

    </div>
  )
}

export default MainExample1