import React from "react";
import ReactDOM from "react-dom";
import { Server, Model } from "miragejs";

import App from "./App";

new Server({
  models: {
    scheduling: Model,
  },
  seeds(server) {
    server.create("scheduling", {
      client: "Maria Sol",
      date: new Date(),
      hour: "16:00",
    });
    server.create("scheduling", {
      client: "Ana Lua",
      date: new Date(),
      hour: "17:00",
    });
  },
  routes() {
    this.namespace = "api";
    this.timing = 50;

    this.get("/scheduling", (schema) => {
      return schema.schedulings.all();
    });

    this.post("/scheduling", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.schedulings.create(attrs);
    });

    this.patch("/scheduling/:id", (schema, request) => {
      let id = request.params.id;
      let scheduling = JSON.parse(request.requestBody);
      return schema.db.schedulings.update(id, scheduling);
    });

    this.delete("/scheduling/:id", (schema, request) => {
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
