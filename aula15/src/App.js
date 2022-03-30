import { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    setLoading(true);
    try {
      const data = await fetch("http://localhost:3000/api/todo");

      const { todos } = await data.json();
      console.log(todos);

      setTodos(todos);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
    setLoading(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title || !description || !date) {
      alert("Preencha todos os campos");
    } else {
      const body = {
        title,
        description,
        status: false,
        date,
      };

      try {
        await fetch("http://localhost:3000/api/todo", {
          method: "POST",
          body: JSON.stringify(body),
        });
        alert("Cadastrado com sucesso");
        getTodos();
      } catch (error) {
        alert("Erro ao cadastrar ToDo");
      }
    }
  }

  async function deleteTodo(id) {
    try {
      await fetch("http://localhost:3000/api/todo/" + id, {
        method: "DELETE",
      });
      alert("ToDo Deletada com sucesso");
      getTodos();
    } catch (error) {
      alert("Erro ao deletar todo");
    }
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>ToDo List - 2.0</h1>
        <div className="inputs">
          <label>
            <span>Título</span>
            <input
              placeholder="Titulo"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            <span>Descrição</span>
            <input
              placeholder="Descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <div className="row">
            <label>
              <span>Data</span>
              <input
                type="date"
                placeholder="Data"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="container-buttons">
          <button type="submit">Salvar</button>
          <button>Limpar</button>
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>
            <div>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>{todo.date}</p>
              <p>{todo.id}</p>
            </div>
            <div className="container-buttons">
              <FiEdit size={20} color="#444" />
              <FiTrash
                size={20}
                color="#444"
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </li>
        ))}
        {loading && <h3>Carregando dados...</h3>}
      </ul>
    </div>
  );
}

export default App;
