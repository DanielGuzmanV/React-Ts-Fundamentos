function Titulo() {
  // No es HTML, es codigo JSX
	const nameValue = "React";
  if(nameValue) {
    return <h1>Hola estoy usando {nameValue}</h1>
  }
  return <h1>Hola estoy usando un lenguaje</h1>

}

export default Titulo
