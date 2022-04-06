// import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function Details() {
  const [product, setProduct] = useState({});

  const parametros = useParams();

  /*   console.log(parametros.identificador) */
  async function getDetailsProduct() {
    try {
      const { data } = await api.get(`/details/${parametros.id}`);
      setProduct(data.detail);
      console.log(data.detail);
    } catch (error) {}
  }

  useEffect(() => {
    getDetailsProduct();
  }, []);

  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.img} width={400} />
      <h2>{product.price}</h2>
      <h3>{product.manufacturer}</h3>
      <p>{product.description}</p>
      {/*       <Button title="Aperte Details" handleFunction={fillState} /> */}
    </>
  );
}
