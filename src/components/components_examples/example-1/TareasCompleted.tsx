import type { TareaList } from "../../../pages/pages_Examples/example-1/MainExample1"
import styled from "./TasksStyle.module.css";

interface Props {
  tareas: TareaList[];
}

function TareasCompleted({tareas}: Props) {
  return (
    <ul className={styled.completedList}>
      {
        tareas.map((valuetarea) => (
          <li className={styled.completedItem} key={valuetarea.id}>
            <span className={styled.tareaTexto}>{valuetarea.texto}</span>
          </li>
        ))
      }
    </ul>
  )
}

export default TareasCompleted