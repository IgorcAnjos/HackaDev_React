import React from "react";
import { Link } from "react-router-dom";

import "./ProdutoBusca.css";

function ProdutoBusca({ id, imagem, nome, preco, colunas, desconto }) {
  return (
    <div className="div-produto-busca">
      <Link to={`/produto/${id}`}>
        <img src={imagem} alt="" className="foto-produto-busca" />
        <section className="nome-produto-buscar">
          <p>{nome}</p>
        </section>
      </Link>
    </div>
  );
}

export default ProdutoBusca;
