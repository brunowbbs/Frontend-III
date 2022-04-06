import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<h1>Page not found - 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
