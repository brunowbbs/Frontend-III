import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([
    { id: 1, qtd: 5 },
    { id: 2, qtd: 2 },
  ]);

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

  return (
    <CartContext.Provider value={{ productsCart, addProducToCart }}>
      {children}
    </CartContext.Provider>
  );
}
