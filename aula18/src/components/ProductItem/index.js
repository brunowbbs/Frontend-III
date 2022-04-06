import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <Link to={`/details/${product.id}`}>
      <li style={{ border: "1px solid #666", marginBottom: 10 }}>
        <img src={product.img} width={200} />
        <h2>{product.name}</h2>
      </li>
    </Link>
  );
}
