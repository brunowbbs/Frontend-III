import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./telas/Details";

import Home from "./telas/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:code" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
