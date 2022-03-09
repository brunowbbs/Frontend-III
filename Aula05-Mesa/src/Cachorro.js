export default function Cachorro(props) {
  const { nome, idade, sexo, tamanho, identidade } = props.item;

  return (
    <>
      <ul>
        <h2>Nome: {nome}</h2>
        <li>Idade: {idade} meses</li>
        <li>Sexo: {sexo}</li>
        <li>Tamanho: {tamanho}</li>
        <li>tipo: {identidade?.tipo || "tipo nao existente"}</li>
      </ul>
    </>
  );
}
