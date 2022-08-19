import { React } from "react";
import { Link } from "react-router-dom";
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
  ListaDeProdutos,
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
          <div className="a">
            <AiOutlineArrowLeft
              id="sair-carrinho"
              onClick={() => {
                setAbrirCarrinho(!abrirCarrinho);
              }}
            />
            <p id="sacola">Sacola ({listaCarrinho.length})</p>
          </div>
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
                  ListaDeProdutos={ListaDeProdutos}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="subtotal-finalizar">
          <p id="subtotal">Subtotal - R$ {subTotal}</p>
          <Link to={`/checkout`}>
            <button id="finalizar">Finalizar</button>
          </Link>
        </section>
      </nav>
    </div>
  ) : (
    ""
  );
};

export default Carrinho;
