import Button from "./components/Button";
import "./styles.css";

function App() {
  return (
    <>
      <header className="header">
        <input className="input" />

        <div className="container_buttons">
          <Button texto="Adicionar" />
          <Button texto="Limpar" />
        </div>
      </header>
    </>
  );
}

export default App;
