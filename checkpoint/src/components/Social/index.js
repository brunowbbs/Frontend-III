import { FiInstagram } from "react-icons/fi";

import { BsLinkedin, BsFillBasketFill } from "react-icons/bs";

export default function Social() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
      }}
    >
      <a href="http://www.instagram.com.br">
        <FiInstagram size={60} color="purple" />
      </a>

      <BsLinkedin size={60} color="#0000FF" />

      <BsFillBasketFill size={60} />
    </div>
  );
}
