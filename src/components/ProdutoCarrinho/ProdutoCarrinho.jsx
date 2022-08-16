import React from "react";

import "./ProdutoCarrinho.css";

function ProdutoCarrinho({
  produto,
  handleAdicaoListaCarrinnho,
  handleSubtracaoListaCarrinnho,
  handleExcluirListaCarrinnho,
  handleSubTotal,
}) {
  return (
    <section className="produto">
      <div className="foto-exclusao">
        <img className="foto-produto" src={produto.imagem} alt="" />
        <p
          className="texto-remover"
          onClick={() => {
            handleExcluirListaCarrinnho(produto.id);
          }}
        >
          Remover item
        </p>
      </div>
      <div className="nome-tamanho-preco-quantidade">
        <p className="nome-produto">{produto.nome}</p>
        <div className="tamanho-preco">
          <p className="tamanho">Tam: {produto.tamanho}</p>
          <p className="preco">R$ {produto.preco}</p>
        </div>
        <div className="quantidade">
          <button
            className="menos-mais"
            onClick={() => {
              handleSubtracaoListaCarrinnho(produto.id);
            }}
            style={
              produto.quantidade === 1
                ? { border: "1px solid rgb(119, 133, 180)" }
                : {}
            }
          >
            -
          </button>
          <p className="numero-quantidade">{produto.quantidade}</p>
          <button
            className="menos-mais"
            onClick={() => {
              handleAdicaoListaCarrinnho(produto.id[0], produto.tamanho);
            }}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProdutoCarrinho;
