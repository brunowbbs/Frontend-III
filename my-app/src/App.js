
//Importando o nosso componente Box;
import Box from './Box';


//Criação do componente em formato de função.
function App() {

  const frutas = ["Cachorro", "Gato", "Macaco"];

  return (
    <>
    {
      frutas.map((item, index)=>{
        return(
          // <li key={index.toString()}>{item}</li>
          <Box item={item} key={index.toString()}/>
        )
      })
    }
   
    </>
  
  )
}

export default App;
