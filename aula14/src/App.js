import "./styles.css";
import api from "./api";

import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  // const dataString = {
  //   status: false,
  //   title: "Estudar2222",
  //   description: "Estudar HTML",
  //   date: new Date(),
  // };

  async function getTodos() {
    const { data } = await api.get("/todo");
    // const { data } = await axios.get("todo", {
    //   headers: {
    //     Authorization: "Bearer asdqweqq30198230q9w8e",
    //   },
    // });
    console.log(data);
    setTodos(data);
  }

  // async function saveTodo() {
  //   axios.post("http://localhost:3000/todo", {
  //     status: false,
  //     title: "Estudar2222",
  //     description: "Estudar HTML",
  //     date: new Date(),
  //   });
  // }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <button onClick={{}}>Buscar todos</button>

      {/* <form>
        <input placeholder="Titulo" />
        <input placeholder="Descrição" />
        Status
        <input type="checkbox" />
        <input type="date" />
        <button>Salvar</button>
      </form> */}
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;
