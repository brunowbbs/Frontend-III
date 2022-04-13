import Container from "../Container";

export default function Box({ texto }) {
  return (
    <div>
      <p>Texto da BOX - {texto}</p>
      <Container texto={texto} />
    </div>
  );
}
