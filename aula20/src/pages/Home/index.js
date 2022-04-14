import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { ThemeContext } from "../../context/theme";
import data from "../../data";
import "./styles.css";

export default function Home() {
  const { addProducToCart, removeProductToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const [products] = useState(data);

  return (
    <div>
      <button onClick={() => {}}>Alterar tema</button>
      {products.map((product) => (
        <div className="cart">
          <div className="container">
            <h2>{product.name}</h2>
            <h3>R${product.price},00</h3>
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
