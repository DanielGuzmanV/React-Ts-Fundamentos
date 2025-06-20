import { useState } from "react";
import styled from "./TasksStyle.module.css";

interface Props {
  onAgregarTarea: (texto: string)=> void
}

function ComponentForm({onAgregarTarea}: Props) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const textIsEmpty = texto.trim();
    if(textIsEmpty === ""){
      alert('Ingresar una tarea');
      return;
    }

    onAgregarTarea(textIsEmpty);
    setTexto("");
  }


  return (
    <form onSubmit={handleSubmit} className={styled.formDiv}>
      <input
        type="text"
        value={texto}
        placeholder="Escribe una tarea"
        onChange={(e) => setTexto(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  )
}

export default ComponentForm