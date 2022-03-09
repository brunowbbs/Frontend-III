import Cachorro from "./Cachorro";
import data from "./data";

function App() {
  return (
    <div>
      <h1>Clientes caninos da veterinária</h1>

      {data.map((item, index) => (
        <Cachorro key={index.toString()} item={item} />
      ))}
    </div>
  );
}

export default App;
