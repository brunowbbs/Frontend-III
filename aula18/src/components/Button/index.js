export default function Button({ title, handleFunction }) {
  return (
    <button onClick={handleFunction} style={{ height: 45, background: "red" }}>
      {title}
    </button>
  );
}
