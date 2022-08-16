import { React, useState } from "react";
import ProdutoCatalogo from "../ProdutoCatalogo/ProdutoCatalogo";

import "./Catalogo.css";

const Catalogo = ({ ListaDeProdutos }) => {
  return (
    <section className="catalogo">
      <h1 className="titulo-catalogo">Catálogo</h1>
      {ListaDeProdutos.map((item) => (
        <ProdutoCatalogo
          key={item.id}
          imagem={item.imagem}
          nome={item.nome}
          preco={item.preco}
        />
      ))}
    </section>
  );
};
export default Catalogo;
