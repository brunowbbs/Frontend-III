import { useState } from "react";

export default function FunctionComponent(props) {
  const [numero, setNumero] = useState(10);

  function incrementar() {
    setNumero(numero + 1);
  }

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
