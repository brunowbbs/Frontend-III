// Criação do nosso componente Box


function Box(props){
  return(
    <li>{props.item}</li>
  )
}

//Exportação do componente para ser utilizado por outro arquivo. (Ex: App.js)
export default Box;