import React from "react";

import "./ListaProdutosCheckout.css";
function ListaProdutosCheckout() {
  return (
    <li className="item-lista">
      <img
        src="https://media.discordapp.net/attachments/1008727983223230494/1008742427600883772/unknown.png?width=436&height=655"
        alt=""
      />
      <div className="nome-tamanho-quantidade">
        <p className="nome">Terno zica pra caramba</p>
        <div className="tamanho-quantidade">
          <p className="tam">Tam:P</p>
          <p className="quant">quant:1</p>
        </div>
      </div>
      <div className="preco-lista">
        <p className="preco-produto">R$ 100.00</p>
      </div>
    </li>
  );
}

export default ListaProdutosCheckout;
