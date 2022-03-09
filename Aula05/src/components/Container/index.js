import "./styles.css";
export function Container(props) {
  return (
    <div className="container">
      <header>Menu</header>

      <main>{props.children}</main>

      <footer>Todos os direitos reservados</footer>
    </div>
  );
}
