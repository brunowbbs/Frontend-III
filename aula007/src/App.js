import { useState } from "react";

//Sempre que precisarmos alterar um valor mostrado em tela, precisaremos de um state

function App() {
  const [valorInput, setValorInput] = useState("");

  return (
    <>
      <h1>{valorInput}</h1>

      <input
        style={{ border: "1px solid red" }}
        onChange={(event) => setValorInput(event.target.value)}
      />
    </>
  );
}

export default App;
