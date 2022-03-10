import "./styles.css";

export default function Button(props) {
  return (
    <button className={props.texto === "Adicionar" ? "button" : "button2"}>
      {props.texto}
    </button>
  );
}
