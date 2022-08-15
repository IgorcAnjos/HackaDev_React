import { React, useState } from "react";

import './ProdutoCatalogo.css'
const ProdutoCatalogo = ({key, imagem, nome, preco}) => {
    return (
        <section className="flex-container">
            <div className="item-catalogo">
                <img className="imagem-catalogo" src={imagem} alt="Imagem Terno" />
                <h2 className="nome-item">{nome}</h2>
                <p className="preco">{`R$ ${preco}`}</p>
            </div>
        </section>
    )
}
export default ProdutoCatalogo;