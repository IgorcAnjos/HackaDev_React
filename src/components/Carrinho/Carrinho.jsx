import React from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";

import ProdutoCarrinho from "../ProdutoCarrinho/ProdutoCarrinho";

import "./Carrinho.css";

function Carrinho({ abrirCarrinho, setAbrirCarrinho }) {
  return abrirCarrinho ? (
    <div className="sombra-carrinho">
      <div
        id="fundo-sair-carrinho"
        onClick={() => {
          setAbrirCarrinho(!abrirCarrinho);
        }}
      ></div>
      <nav className="carrinho">
        <section id="sair-quantidade">
          <a>
            <AiOutlineArrowLeft
              id="sair-carrinho"
              onClick={() => {
                setAbrirCarrinho(!abrirCarrinho);
              }}
            />
            <p id="sacola">Sacola (3)</p>
          </a>
        </section>
        <section className="secao-carrinho">
          <ul className="carrinho-produtos">
            <ProdutoCarrinho />
            <ProdutoCarrinho />
            <ProdutoCarrinho />
            <ProdutoCarrinho />
            <ProdutoCarrinho />
          </ul>
        </section>
        <section className="subtotal-finalizar">
          <p id="subtotal">Subtotal - R$ 10.450.00</p>
          <button id="finalizar">Finalizar</button>
        </section>
      </nav>
    </div>
  ) : (
    ""
  );
}

export default Carrinho;
