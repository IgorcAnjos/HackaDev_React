import { React } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";

import ProdutoCarrinho from "../ProdutoCarrinho/ProdutoCarrinho";

import "./Carrinho.css";

const Carrinho = ({
  abrirCarrinho,
  setAbrirCarrinho,
  listaCarrinho,
  handleAdicaoListaCarrinnho,
  handleSubtracaoListaCarrinnho,
  handleExcluirListaCarrinnho,
  subTotal,
  handleSubTotal,
}) => {
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
          <a href="#">
            <AiOutlineArrowLeft
              id="sair-carrinho"
              onClick={() => {
                setAbrirCarrinho(!abrirCarrinho);
              }}
            />
            <p id="sacola">Sacola ({listaCarrinho.length})</p>
          </a>
        </section>
        <section className="secao-carrinho">
          <ul className="carrinho-produtos">
            {listaCarrinho.map((produto) => (
              <li key={produto.id}>
                <ProdutoCarrinho
                  produto={produto}
                  handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
                  handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
                  handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
                  handleSubTotal={handleSubTotal}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="subtotal-finalizar">
          <p id="subtotal">Subtotal - R$ {subTotal}</p>
          <button id="finalizar">Finalizar</button>
        </section>
      </nav>
    </div>
  ) : (
    ""
  );
};

export default Carrinho;
