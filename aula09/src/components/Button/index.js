import "./styles.css";

export default function Button(props) {
  return (
    <button
      onClick={props.apertar}
      className={props.texto === "Adicionar" ? "button" : "button2"}
    >
      {props.texto}
    </button>
  );
}
