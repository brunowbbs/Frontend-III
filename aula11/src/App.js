import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("back");

  function submitForm(evento) {
    // console.log(evento);
    evento.preventDefault();
    console.log(nome);
  }

  return (
    <form onSubmit={submitForm}>
      <h1>
        {nome} - {curso}
      </h1>
      <input onChange={(evento) => setNome(evento.target.value)} />

      <select
        onChange={(evento) => setCurso(evento.target.value)}
        defaultValue={curso}
      >
        <option></option>
        <option value="front">Front end</option>
        <option value="back">Back end</option>
        <option value="devops">DevOps</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default App;
