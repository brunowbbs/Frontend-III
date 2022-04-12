import { useEffect, useState } from "react";
import Modal from "react-modal";

import { formatMoney, formatDate } from "./hooks/useUtils";
import api from "./services/api";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: 500,
    height: 400,
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0,0,0,0.6)",
  },
};

function App() {
  const [accounts, setAccounts] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  async function getAccounts() {
    try {
      const { data } = await api.get("/account");
      setAccounts(data.accounts);
    } catch (error) {
      alert("Erro ao buscar contas");
    }
  }

  useEffect(() => {
    getAccounts();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1>Hello World</h1>
      {accounts.map((account) => (
        <div key={account.id}>
          <p>{account.client}</p>
          <p>{formatMoney(account.balance)}</p>
          <p>{formatDate(account.date)}</p>
        </div>
      ))}
      <button onClick={() => setVisibleModal(true)}>Novo Registro</button>
      <Modal
        style={customStyles}
        isOpen={visibleModal}
        onRequestClose={() => setVisibleModal(false)}
      >
        <h1>Cadastrar nova conta</h1>

        <form onSubmit={handleSubmit}>
          <input placeholder="Email" />
          <input placeholder="Senha" />
          <input placeholder="Telefone" />

          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setVisibleModal(false)}>
            Cancelar
          </button>
        </form>
      </Modal>
    </>
  );
}

export default App;
