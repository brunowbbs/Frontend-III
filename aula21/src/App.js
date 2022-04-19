import { useEffect, useState, useRef } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  //const [input, setInput] = useState("");

  const inputRef = useRef(null);

  function addTask() {
    const valorDigitadoUsuario = inputRef.current.value;
    alert(valorDigitadoUsuario);

    //inputRef.current.focus();
    //inputRef.current.style.background = "red";

    // const valorInput = inputRef.current.value;
    setTasks([...tasks, valorDigitadoUsuario]); // SetState é uma operação assincrona
    localStorage.setItem(
      "@todo_tasks",
      JSON.stringify([...tasks, valorDigitadoUsuario])
    );

    inputRef.current.value = "";
  }

  useEffect(() => {
    console.log(inputRef);
    const tasksStorage = localStorage.getItem("@todo_tasks");

    if (tasksStorage) {
      const tempTasks = JSON.parse(tasksStorage);
      setTasks(tempTasks);
    }
  }, []);

  return (
    <div>
      <h1>Hello World</h1>

      <button onClick={addTask}>Salvar</button>

      {tasks.map((task) => (
        <p>{task}</p>
      ))}
      <input ref={inputRef} />
    </div>
  );
}

export default App;
