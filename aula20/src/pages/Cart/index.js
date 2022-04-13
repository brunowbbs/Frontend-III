import React, { useContext } from "react";
import { CartContext } from "../../context/cart";

export default function Cart() {
  const { productsCart } = useContext(CartContext);

  return (
    <div>
      <h1>Produtos no carrinho de compras</h1>
      <p>{JSON.stringify(productsCart)}</p>
    </div>
  );
}
