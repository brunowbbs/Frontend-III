import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import data from "../../data";
import "./styles.css";

export default function Home() {
  const {
    productsCart = [],
    addProducToCart,
    removeProductToCart,
    clearCart,
  } = useContext(CartContext);

  const [products] = useState(data);

  return (
    <div>
      <button onClick={clearCart}>Limpar Carrinho</button>
      <p>{JSON.stringify(productsCart)}</p>
      {products.map((product) => (
        <div className="cart" key={product.id}>
          <div className="container">
            <h2>{product.name}</h2>
            <h3>R${product.price},00</h3>
            <h3>
              {productsCart.find((item) => item.id === product.id)?.qtd
                ? productsCart.find((item) => item.id === product.id)?.qtd
                : 0}
            </h3>
            <button onClick={() => addProducToCart(product.id)}>+</button>
            <button onClick={() => removeProductToCart(product.id)}>-</button>
          </div>
          <img src={product.image} />
        </div>
      ))}
      <Link to="/cart">Ver carrinho</Link>
    </div>
  );
}
