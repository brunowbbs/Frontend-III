import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  function addProducToCart(id) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      item[0].qtd = item[0].qtd + 1;
    } else {
      copyProductsCart.push({ id: id, qtd: 1 });
    }

    setProductsCart(copyProductsCart);
  }

  function removeProductToCart(id) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      if (item[0].qtd > 1) {
        item[0].qtd = item[0].qtd - 1;
        setProductsCart(copyProductsCart);
      } else {
        const arrayFilterd = copyProductsCart.filter(
          (product) => product.id !== id
        );
        setProductsCart(arrayFilterd);
      }
    } else {
      alert("Esse produto não existe no carrinho");
    }
  }

  return (
    <CartContext.Provider
      value={{ productsCart, addProducToCart, removeProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
