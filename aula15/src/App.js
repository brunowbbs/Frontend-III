import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import "./styles.css";

const data = [
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
  {
    status: false,
    _id: "62433f49b68ce20004a3113d",
    title: "Estudar",
    description: "Estudar HTML",
    date: "2021-03-29T00:00:00.000Z",
    __v: 0,
  },
];

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <div className="app">
      <form>
        <h1>ToDo List - 2.0</h1>
        <div className="inputs">
          <label>
            <span>Título</span>
            <input placeholder="Titulo" />
          </label>
          <label>
            <span>Descrição</span>
            <input placeholder="Descrição" />
          </label>
          <div className="row">
            <label>
              <span>Data</span>
              <input type="date" placeholder="Data" />
            </label>
          </div>
        </div>
        <div className="container-buttons">
          <button>Salvar</button>
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
            </div>
            <div className="container-buttons">
              <FiEdit size={20} color="#444" />
              <FiTrash size={20} color="#444" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
