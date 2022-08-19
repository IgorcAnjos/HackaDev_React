import React, { useState } from "react";
import ListaProdutosCheckout from "../ListaProdutosCheckout/ListaProdutosCheckout";

import "./DetalhesCompra.css";

function DetalhesCompra({ listaCarrinho }) {
  const [abrirDetalhes, setAbrirDetalhes] = useState(false);
  return (
    <section className="detalhes-da-compra">
      <div
        className="botao-detalhes-da-compra"
        id="botao-detalhes-da-compra"
        onClick={() => {
          setAbrirDetalhes(!abrirDetalhes);
        }}
      >
        <p>Detalhes da Compra</p>
      </div>
      <ul className="lista-produtos" id="lista-produtos">
        {abrirDetalhes
          ? listaCarrinho.map((produto) => (
              <ListaProdutosCheckout
                key={produto.id}
                id={produto.id}
                imagem={produto.imagem}
                nome={produto.nome}
                preco={produto.preco}
                tamanho={produto.tamanho}
                quantidade={produto.quantidade}
              />
            ))
          : ""}
      </ul>
    </section>
  );
}

export default DetalhesCompra;
