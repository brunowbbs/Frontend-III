export default function FunctionalComponent(props) {
  function handleClick() {
    alert(props.nome);
  }

  return (
    <>
      <h1>Hello FunctionalComponent</h1>
      <button onClick={handleClick}>Aperte</button>
    </>
  );
}
