import { useState } from "react";
import Button from "./components/Button";
import "./styles.css";

const task = {
  id: "1",
  nome: "Fazer Café",
  status: false,
};

function App() {
  const [textoInput, setTextoInput] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: "1",
      nome: "Fazer Café",
      status: false,
    },
    {
      id: "2",
      nome: "Estudar React",
      status: false,
    },
  ]);

  function handleTextInput(event) {
    setTextoInput(event.target.value);
  }

  return (
    <>
      <header className="header">
        <input className="input" onChange={(event) => handleTextInput(event)} />
        <div className="container_buttons">
          <Button texto="Adicionar" />
          <Button texto="Limpar" />
        </div>
      </header>
    </>
  );
}

export default App;
