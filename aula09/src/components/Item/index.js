export default function Item(props) {
  return (
    <div>
      <input type="checkbox" defaultChecked={props.status} />
      <span>{props.nome}</span>
      <button onClick={() => props.funcaoApagar(props.id)}>Apagar</button>
    </div>
  );
}
