import { React } from "react";
import { Link } from "react-router-dom";

import "./ProdutoCatalogo.css";

const ProdutoCatalogo = ({ id, imagem, nome, preco, colunas }) => {
  return (
    <Link to={`/produto/${id}`} className="link">
      <div
        className="item-catalogo"
        style={colunas === "coluna2" ? {} : { width: "70vw", height: "70vh" }}
      >
        <img
          className="imagem-catalogo"
          src={imagem}
          alt="Imagem Terno"
          style={colunas === "coluna2" ? {} : { height: "85%" }}
        />
        <h2 className="nome-item">{nome}</h2>
        <p className="preco">{`R$ ${preco}`}</p>
      </div>
    </Link>
  );
};
export default ProdutoCatalogo;
