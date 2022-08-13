import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../PagesJSX/Home/Home";
import Cadastro from "../PagesJSX/Cadastro/Cadastro";
import Produto from "../PagesJSX/Produto/Produto";
import Checkout from "../PagesJSX/Checkout/Checkout";
import Novidades from "../PagesJSX/Novidades/Novidades";
import Busca from "../PagesJSX/Busca/Busca";
import Login from "../PagesJSX/Login/Login";

const RouterPages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/busca" element={<Busca />} />
      </Routes>
    </Router>
  );
};

export default RouterPages;
