import React from "react";
import ReactDOM from "react-dom";
import { Server, Model } from "miragejs";

import App from "./App";

new Server({
  models: {
    todo: Model,
  },
  seeds(server) {
    server.create("todo", {
      title: "Reunião",
      description: "Reunião sobre frontend",
      status: false,
      date: new Date(),
    });
    server.create("todo", {
      title: "Codificação",
      description: "Implementação do Carousel animado",
      status: false,
      date: new Date(),
    });
    server.create("todo", {
      title: "Testes de Software",
      description: "Testar a funcionalidade de login e logout",
      status: false,
      date: new Date(),
    });
  },
  routes() {
    this.namespace = "api";
    this.timing = 50;

    this.get("/todo", (schema) => {
      return schema.todos.all();
    });

    this.post("/todo", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.todos.create(attrs);
    });

    this.patch("/todo/:id", (schema, request) => {
      let id = request.params.id;
      let todo = JSON.parse(request.requestBody);
      return schema.db.todos.update(id, todo);
    });

    this.delete("/todo/:id", (schema, request) => {
      let id = request.params.id;
      return schema.todos.find(id).destroy();
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
