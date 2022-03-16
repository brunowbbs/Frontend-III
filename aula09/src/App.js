import { useState } from "react";
import Button from "./components/Button";
import "./styles.css";

import tasksTemp from "./data";
import Item from "./components/Item";

// const task = {
//   id: "1",
//   nome: "Fazer Café",
//   status: false,
// };

function App() {
  const [textoInput, setTextoInput] = useState("");

  const [tasks, setTasks] = useState(tasksTemp);

  function addItem() {
    const newTask = {
      id: Date.now().toString(),
      nome: textoInput,
      status: false,
    };
    setTasks([...tasks, newTask]);
    setTextoInput("");
  }

  function deleteItem(id) {
    const temp = tasks.filter((item) => item.id !== id);
    setTasks(temp);
  }

  function handleTextInput(event) {
    setTextoInput(event.target.value);
  }

  return (
    <>
      <header className="header">
        <input
          value={textoInput}
          className="input"
          onChange={(event) => handleTextInput(event)}
        />
        <div className="container_buttons">
          <Button texto="Adicionar" apertar={addItem} />
          <Button texto="Limpar" />
        </div>
      </header>

      <main>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Item
              key={task.id}
              id={task.id}
              nome={task.nome}
              status={task.status}
              funcaoApagar={deleteItem}
            />
          ))
        ) : (
          <span>Nenhuma tarefa adicionada</span>
        )}
      </main>
    </>
  );
}

export default App;
