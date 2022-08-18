import React from "react";
import ListaProdutosCheckout from "../ListaProdutosCheckout/ListaProdutosCheckout";

import "./DetalhesCompra.css";

function DetalhesCompra({ listaCarrinho }) {
  return (
    <section class="detalhes-da-compra">
      <div class="botao-detalhes-da-compra" id="botao-detalhes-da-compra">
        <p>Detalhes da Compra</p>
      </div>
      <ul class="lista-produtos" id="lista-produtos">
        {listaCarrinho.map((produto) => (
          <ListaProdutosCheckout
            key={produto.id}
            id={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
            tamanho={produto.tamanho}
            quantidade={produto.quantidade}
          />
        ))}
      </ul>
    </section>
  );
}

export default DetalhesCompra;
