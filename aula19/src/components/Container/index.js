import Button from "../Button";

export default function Container({ texto }) {
  return (
    <div>
      <h1>Texto do container - {texto}</h1>
      <Button texto={texto} />
    </div>
  );
}
