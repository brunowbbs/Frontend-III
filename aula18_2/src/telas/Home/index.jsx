import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  const [cep, setCep] = useState("");

  return (
    <div className="container">
      <input
        placeholder="Digite seu CEP"
        value={cep}
        onChange={(event) => setCep(event.target.value)}
        maxLength={9}
      />
      <Link to={"/details/" + cep}>
        <button>Pesquisar</button>
      </Link>
    </div>
  );
}
