import { React, useEffect, useState } from "react";
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
  const [listaCarrinho, setListaCarrinho] = useState([]);

  const handleAdicaoListaCarrinnho = (id, tamanho) => {
    const idClick = `${id}${tamanho}`;

    const produtoExiste = listaCarrinho.filter(
      (produto) => produto.id === idClick
    );

    const equivalencia = ListaDeProdutos.filter(
      (produto) => produto.id === parseInt(id)
    );

    const equivalenciaQuantidadeTamanho = `quantidade_${tamanho}`;

    if (produtoExiste.length > 0) {
      if (
        produtoExiste[0].quantidade <
        equivalencia[0][equivalenciaQuantidadeTamanho]
      ) {
        const indexProduto = listaCarrinho.indexOf(produtoExiste[0]);

        listaCarrinho[indexProduto].quantidade =
          produtoExiste[0].quantidade + 1;
        const novaListaCarrinho = [...listaCarrinho];

        setListaCarrinho(novaListaCarrinho);
      }
    } else {
      const findProduto = ListaDeProdutos.filter(
        (produto) => produto.id === id
      )[0];

      const novoProduto = {
        id: idClick,
        imagem: findProduto.imagem,
        nome: findProduto.nome,
        preco:
          findProduto.preco - findProduto.preco * (findProduto.desconto / 100),
        tamanho: tamanho,
        quantidade: 1,
      };

      const novaListaCarrinho = [...listaCarrinho, novoProduto];
      setListaCarrinho(novaListaCarrinho);
    }
  };

  const handleSubtracaoListaCarrinnho = (idClick) => {
    const findProduto = listaCarrinho.filter(
      (produto) => produto.id === idClick
    );

    if (findProduto[0].quantidade !== 1) {
      const indexProduto = listaCarrinho.indexOf(findProduto[0]);

      listaCarrinho[indexProduto].quantidade = findProduto[0].quantidade - 1;
      const novaListaCarrinho = [...listaCarrinho];

      setListaCarrinho(novaListaCarrinho);
    }
  };

  const handleExcluirListaCarrinnho = (idClick) => {
    const novaListaCarrinho = listaCarrinho.filter(
      (produto) => produto.id !== idClick
    );

    setListaCarrinho(novaListaCarrinho);
  };

  const [subTotal, setSubTotal] = useState(0);

  const handleSubTotal = (listaCarrinho) => {
    let soma = 0;

    listaCarrinho.map(
      (produto) => (soma += produto.preco * produto.quantidade)
    );
    setSubTotal(soma.toFixed(2));
  };

  useEffect(() => {
    handleSubTotal(listaCarrinho);
  }, [listaCarrinho]);

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
              handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
              handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
              subTotal={subTotal}
              handleSubTotal={handleSubTotal}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/checkout"
          element={<Checkout listaCarrinho={listaCarrinho} />}
        />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/busca" element={<Busca />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route
          path="/produto/:id"
          element={
            <Produto
              ListaDeProdutos={ListaDeProdutos}
              listaCarrinho={listaCarrinho}
              handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
              handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
              handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
              subTotal={subTotal}
              handleSubTotal={handleSubTotal}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterPages;
