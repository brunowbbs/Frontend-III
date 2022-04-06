import React from "react";
import ReactDOM from "react-dom";
import { Server, Model } from "miragejs";

import App from "./App";

new Server({
  models: {
    product: Model,
    detail: Model,
  },
  seeds(server) {
    server.create("product", {
      id: 1,
      name: "Iphone 12 pro",
      img: "https://images-americanas.b2w.io/produtos/01/00/img/2290963/0/2290963066_1GG.jpg",
    });
    server.create("product", {
      id: 2,
      name: "Macbook pro M1",
      img: "https://www.tradeinn.com/f/13787/137870852/apple-computador-portatil-macbook-pro-13-m1-8gb-512gb-ssd.jpg",
    });
    server.create("product", {
      id: 3,
      name: "Galaxy s21",
      img: "https://images-submarino.b2w.io/produtos/01/00/img/2875240/4/2875240402_1SZ.jpg",
    });
    server.create("detail", {
      id: 1,
      name: "Iphone 12 pro",
      img: "https://images-americanas.b2w.io/produtos/01/00/img/2290963/0/2290963066_1GG.jpg",
      manufacturer: "Apple",
      price: 8999,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis elit euismod dolor dapibus feugiat. Aliquam hendrerit metus vitae consequat imperdiet. Aenean viverra tortor sit amet est semper sodales.",
    });
    server.create("detail", {
      id: 2,
      name: "Macbook pro M1",
      img: "https://www.tradeinn.com/f/13787/137870852/apple-computador-portatil-macbook-pro-13-m1-8gb-512gb-ssd.jpg",
      manufacturer: "Apple",
      price: 10999,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis elit euismod dolor dapibus feugiat. Aliquam hendrerit metus vitae consequat imperdiet. Aenean viverra tortor sit amet est semper sodales.",
    });
    server.create("detail", {
      id: 3,
      name: "Galaxy s21",
      img: "https://images-submarino.b2w.io/produtos/01/00/img/2875240/4/2875240402_1SZ.jpg",
      manufacturer: "Samsung",
      price: 5999,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis elit euismod dolor dapibus feugiat. Aliquam hendrerit metus vitae consequat imperdiet. Aenean viverra tortor sit amet est semper sodales.",
    });
  },
  routes() {
    this.namespace = "api";
    this.timing = 2000;

    this.get("/product", (schema) => {
      return schema.products.all();
    });

    this.get("/details/:id", (schema, request) => {
      let id = request.params.id;
      return schema.details.find(id);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
