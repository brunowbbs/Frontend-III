import "./styles.css";
import logo from "../../assets/logo.png";

export default function Header() {
  // function scrollToProjects() {
  //   document.getElementById("projects").scrollIntoView();
  // }

  // function scrollToAbout() {
  //   document.getElementById("about").scrollIntoView();
  // }

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header>
      <img src={logo} width={40} />

      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("projects")}>
          Projetos
        </li>
        <li className="item-menu" onClick={() => scrollToComponent("about")}>
          Ferramentas
        </li>
        <li className="item-menu">Sobre</li>
      </ul>
    </header>
  );
}
