import "./styles.css";

const data = [
  {
    id: "1",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
  {
    id: "2",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
  {
    id: "3",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
  {
    id: "4",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
  {
    id: "5",
    name: "Lorem Ipsum",
    link: "https://github.com/brunowbbs/Frontend-III",
    image:
      "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
  },
];

export default function Projects() {
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link }) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src={image} width={350} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
