import type { TareaList } from "../../../pages/pages_Examples/example-1/MainExample1"
import styled from "./TasksStyle.module.css";

interface Props {
  tareas: TareaList[];
  onEliminarTareas: (id: number) => void;
  onCompletarTareas: (id: number) => void;
}

function TareasAdd({tareas, onEliminarTareas, onCompletarTareas}: Props) {

  const listTareas = tareas.map( (valueTarea) => (
    <li className={styled.tareaList} key={valueTarea.id}>
      <span className={styled.tareaTexto}>{valueTarea.texto}</span>

      <div className={styled.btnGroup}>
        <button className={styled.btnListDel} onClick={() => onEliminarTareas(valueTarea.id)}>
          Eliminar
        </button>

        <button className={styled.btnListAdd} onClick={() => onCompletarTareas(valueTarea.id)}>
          Agregar
        </button>
      </div>
    </li>
  ))


  return (
    <ul className={styled.contentListUl}>
      {listTareas}
    </ul>
  )
}

export default TareasAdd