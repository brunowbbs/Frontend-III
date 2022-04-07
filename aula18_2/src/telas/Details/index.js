import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

export default function Details() {
  const parametros = useParams();
  const [endereco, setEndereco] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataCep();
  }, []);

  async function getDataCep() {
    try {
      const { data } = await api.get(`/${parametros.code}/json`);
      console.log(data);
      setEndereco(data);
    } catch (error) {
      alert("Erro ao buscar CEP " + error);
    }
    setLoading(false);
  }

  if (loading) {
    return <h1>Carregandoo....</h1>;
  }

  if (!endereco.localidade && !loading) {
    return <h1>CEP Invalido</h1>;
  }

  return (
    <>
      <h1>Tela de Details - {parametros.code}</h1>
      <h2>
        RUA: {endereco.logradouro ? endereco.logradouro : "Rua não informada"}
      </h2>
      <h3>
        BAIRRO: {endereco.bairro ? endereco.bairro : "Bairro não informado"}
      </h3>
      <h3>
        LOCALIDADE: {endereco.localidade} - {endereco.uf}
      </h3>
      {/*       <button onClick={getDataCep}>Buscar</button> */}
    </>
  );
}
