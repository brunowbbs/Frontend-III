export default function Item(props) {
  return (
    <div>
      <input type="checkbox" defaultChecked={props.status} />
      <span>{props.nome}</span>
      {/* {!props.status ? (
        <button onClick={() => props.funcaoApagar(props.id)}>Apagar</button>
      ) : undefined} */}
      {!props.status && (
        <button onClick={() => props.funcaoApagar(props.id)}>Apagar</button>
      )}
    </div>
  );
}
