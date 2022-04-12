import { useEffect, useState } from "react";
import { formatMoney, formatDate } from "./hooks/useUtils";

import api from "./services/api";

function App() {
  const [accounts, setAccounts] = useState([]);

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
    </>
  );
}

export default App;
