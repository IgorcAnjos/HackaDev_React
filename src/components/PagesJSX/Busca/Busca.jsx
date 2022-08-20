import React, { useEffect, useState } from "react";

import Header from "../../Header/Header";
import ProdutoBusca from "../../ProdutoBusca/ProdutoBusca";
import ProdutoCatalogo from "../../ProdutoCatalogo/ProdutoCatalogo";
import Footer from "../../Footer/Footer";

import "./Busca.css";

const Busca = ({ ListaDeProdutos }) => {
  const [ListaDeBusca, SetListaDeBusca] = useState([]);
  const [buscar, setBuscar] = useState("");
  useEffect(() => {
    const novaListaProdutos = ListaDeProdutos.filter((produto) =>
      produto.nome.toLowerCase().includes(buscar.toLowerCase())
    );

    SetListaDeBusca(novaListaProdutos);
  }, [buscar]);
  return (
    <div className="container-busca">
      <Header texto={"Buscar"} />
      <div className="input-buscar">
        <label className="label-texto" htmlFor="input-busca">
          O que está procurando?
        </label>
        <input
          className="input"
          type="text"
          name="input-buscar"
          id="input-busca"
          size={30}
          maxLength={30}
          placeholder="Digite Aqui..."
          onChange={(event) => {
            setBuscar(event.target.value);
            console.log(buscar);
          }}
        />
      </div>
      <section className="flex-section">
        {ListaDeBusca.map((item) => (
          <ProdutoCatalogo
            key={item.id}
            id={item.id}
            imagem={item.imagem}
            nome={item.nome}
            preco={item.preco}
            colunas="coluna1"
            desconto={item.desconto}
          />
        ))}
      </section>
      <div className="espacinho"></div>
      <Footer />
    </div>
  );
};

export default Busca;
