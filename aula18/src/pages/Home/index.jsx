import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    try {
      const response = await api.get("/product");
      setProducts(response.data.products);
    } catch (error) {}
  }

  return (
    <>
      <h1>Produtos</h1>
      <ul style={{ listStyle: "none" }}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
