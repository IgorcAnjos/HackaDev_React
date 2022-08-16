import { React, useState } from "react";
import { Link } from "react-router-dom";

import './ProdutoCatalogo.css'
const ProdutoCatalogo = ({id, imagem, nome, preco}) => {
    return (
        <Link to={`/produto/${id}`}>
            <section className="flex-container">
                <div className="item-catalogo">
                    <img className="imagem-catalogo" src={imagem} alt="Imagem Terno" />
                    <h2 className="nome-item">{nome}</h2>
                    <p className="preco">{`R$ ${preco}`}</p>
                </div>
            </section>
        </Link>
    )
}
export default ProdutoCatalogo;