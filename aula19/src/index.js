import React from "react";
import ReactDOM from "react-dom";
import { Server, Model } from "miragejs";

import App from "./App";

new Server({
  models: {
    account: Model,
  },
  seeds(server) {
    server.create("account", {
      client: "José Santos",
      date: new Date(),
      balance: 25000,
    });
    server.create("account", {
      client: "Maria Alcântara",
      date: new Date(),
      balance: 115000,
    });
    server.create("account", {
      client: "João Lopes",
      date: new Date(), //UTC
      balance: 4125000, //R$4.124.000,00
    });
  },
  routes() {
    this.namespace = "api";
    this.timing = 50;

    this.get("/account", (schema) => {
      return schema.accounts.all();
    });

    this.post("/account", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.accounts.create(attrs);
    });

    this.patch("/account/:id", (schema, request) => {
      let id = request.params.id;
      let account = JSON.parse(request.requestBody);
      return schema.db.accounts.update(id, account);
    });

    this.delete("/account/:id", (schema, request) => {
      let id = request.params.id;
      return schema.accounts.find(id).destroy();
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
