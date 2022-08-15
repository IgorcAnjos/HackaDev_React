import React from "react";

import "./ProdutoCarrinho.css";

function ProdutoCArrinho() {
  return (
    <section className="produto">
      <div className="foto-exclusao">
        <img
          className="foto-produto"
          src="https://storetng.vteximg.com.br/arquivos/ids/440137-1000-1000/I20MTL03_950_1-TRAJE-SOCIAL-EM-POLIESTER-LISO.jpg?v=637904605398630000"
          alt=""
        />
        <p className="texto-remover">Remover item</p>
      </div>
      <div className="nome-tamanho-preco-quantidade">
        <p className="nome-produto">Terno Slim fit oliva de pedreiro</p>
        <div className="tamanho-preco">
          <p className="tamanho">Tam: M</p>
          <p className="preco">R$199,99</p>
        </div>
        <div className="quantidade">
          <button className="menos-mais">-</button>
          <p className="numero-quantidade">10</p>
          <button className="menos-mais">+</button>
        </div>
      </div>
    </section>
  );
}

export default ProdutoCArrinho;
