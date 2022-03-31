import { useEffect, useState } from "react";
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    setLoading(true);
    try {
      const data = await fetch("http://localhost:3000/api/todo");

      const { todos } = await data.json();

      setTodos(todos);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
    setLoading(false);
  }

  async function newTodo(event) {
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
        clearStates();
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

  function fillStates(todo) {
    setTitle(todo.title);
    setDescription(todo.description);
    setDate(todo.date.split("T")[0]);
    setId(todo.id);
  }

  function clearStates() {
    setId("");
    setTitle("");
    setDescription("");
    setDate("");
  }

  async function editTodo(event) {
    event.preventDefault();
    try {
      const body = {
        title,
        description,
        date,
      };
      await fetch("http://localhost:3000/api/todo/" + id, {
        method: "PATCH",
        body: JSON.stringify(body),
      });
      alert("ToDO alterado");
      clearStates();
      getTodos();
    } catch (error) {
      alert("Erro ao alterar");
    }
  }

  async function checkTodo(id, status) {
    const body = {
      status: !status,
    };

    try {
      await fetch("http://localhost:3000/api/todo/" + id, {
        method: "PATCH",
        body: JSON.stringify(body),
      });
      getTodos();
    } catch (error) {}
  }

  return (
    <div className="app">
      <form onSubmit={id ? editTodo : newTodo}>
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
          <button type="submit">{!id ? "Salvar" : "Alterar"}</button>
          <button type="button" onClick={clearStates}>
            Limpar
          </button>
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            style={todo.status ? { background: "blue" } : { background: "red" }}
          >
            <div>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>{todo.date}</p>
              <p>{todo.id}</p>
              <p>{todo.status.toString()}</p>
            </div>
            <div className="container-buttons">
              <FiEdit size={20} color="#444" onClick={() => fillStates(todo)} />
              <FiTrash
                size={20}
                color="#444"
                onClick={() => deleteTodo(todo.id)}
              />
              <FiCheck
                size={20}
                color="#444"
                onClick={() => checkTodo(todo.id, todo.status)}
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
