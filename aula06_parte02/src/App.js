import { useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);

  // let value = 0;

  function increment() {
    // value = value + 1;
    // console.log(value);
    setNumero(numero + 1);
  }

  function decrement() {
    // value = value + 1;
    // console.log(value);
    setNumero(numero - 1);
  }

  function setNumber() {
    setNumero(1000);
  }

  function setNumberByParam(valor) {
    setNumero(valor);
  }

  return (
    <center>
      <h1>{numero}</h1>
      <p>asdasdas</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={setNumber}>Setar 1000</button>
      <button onClick={() => setNumberByParam(50)}>Setar 50</button>
    </center>
  );
}

export default App;
