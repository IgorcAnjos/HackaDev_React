import React from "react";
import ListaProdutosCheckout from "../ListaProdutosCheckout/ListaProdutosCheckout";

import "./DetalhesCompra.css";

function DetalhesCompra() {
  return (
    <section class="detalhes-da-compra">
      <div class="botao-detalhes-da-compra" id="botao-detalhes-da-compra">
        <p>Detalhes da Compra</p>
      </div>
      <ul class="lista-produtos" id="lista-produtos">
        <ListaProdutosCheckout />
        <ListaProdutosCheckout />
      </ul>
    </section>
  );
}

export default DetalhesCompra;
