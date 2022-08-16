import { React, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../PagesJSX/Home/Home";
import Cadastro from "../PagesJSX/Cadastro/Cadastro";
import Produto from "../PagesJSX/Produto/Produto";
import Checkout from "../PagesJSX/Checkout/Checkout";
import Novidades from "../PagesJSX/Novidades/Novidades";
import Busca from "../PagesJSX/Busca/Busca";
import Login from "../PagesJSX/Login/Login";
import Duvidas from "../PagesJSX/DuvidasESac/Duvidas";

const getProdutos = require("../../ArrayBancoDeDados/ArrayBancoDeDados");

const RouterPages = () => {
  const ListaDeProdutos = getProdutos();
  const [listaCarrinho, setListaCarrinho] = useState([
    {
      id: "5M",
      imagem:
        "https://media.discordapp.net/attachments/1008727983223230494/1008735052999430174/unknown.png?width=362&height=634",
      nome: "Jurubeba azul ",
      tamanho: "M",
      preco: 588.99,
      quantidade: 3,
    },
    {
      id: "7G",
      imagem:
        "https://media.discordapp.net/attachments/1008727983223230494/1008735052999430174/unknown.png?width=362&height=634",
      nome: "Roupinha anil",
      tamanho: "G",
      preco: 80000.589,
      quantidade: 1,
    },
  ]);

  const handleAdicaoListaCarrinnho = (id, tamanho) => {
    const idClick = `${id}${tamanho}`;

    const produtoExiste = listaCarrinho.filter(
      (produto) => produto.id === idClick
    );

    if (produtoExiste.length > 0) {
      const indexProduto = listaCarrinho.indexOf(produtoExiste[0]);

      listaCarrinho[indexProduto].quantidade = produtoExiste[0].quantidade + 1;
      const novaListaCarrinho = [...listaCarrinho];

      setListaCarrinho(novaListaCarrinho);
    } else {
      const findProduto = ListaDeProdutos.filter(
        (produto) => produto.id === id
      )[0];

      const novoProduto = {
        id: idClick,
        imagem: findProduto.imagem,
        nome: findProduto.nome,
        preco: findProduto.preco,
        tamanho: tamanho,
        quantidade: 1,
      };

      const novaListaCarrinho = [...listaCarrinho, novoProduto];
      setListaCarrinho(novaListaCarrinho);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              ListaDeProdutos={ListaDeProdutos}
              listaCarrinho={listaCarrinho}
              handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/busca" element={<Busca />} />
        <Route path="/duvidas" element={<Duvidas />} />
      </Routes>
    </Router>
  );
};

export default RouterPages;
