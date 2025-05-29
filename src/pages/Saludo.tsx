function saludo() {
  const value = 'React';

  if(value) {
    return <h1>Hola estoy usando {value}</h1>
  }
  return <h1>Hola estoy usando un lenguaje de programacion</h1>  
}

export default saludo