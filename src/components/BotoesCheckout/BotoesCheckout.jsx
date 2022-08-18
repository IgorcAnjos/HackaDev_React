import React from "react";

import "./BotoesCheckout.css";

function BotoesCheckout() {
  return (
    <section className="formulario formas-pagamento">
      <div className="texto-descricao">
        <p className="formas-de-pagamento">Formas de pagamento</p>
      </div>
      <div className="select-formas-pagamento">
        <ul className="lista formas-pagamento">
          <li className="lista-pagamento item">
            <button className="selecao-forma" id="cartao-credito">
              <i className="fa-solid fa-credit-card"></i>
              <p className="texto-forma-pagamento">Cartão de Crédito</p>
            </button>
          </li>
          <li className="lista-pagamento item">
            <button className="selecao-forma" id="boleto">
              <i className="fa-solid fa-barcode"></i>
              <p className="texto-forma-pagamento">Boleto</p>
            </button>
          </li>
          <li className="lista-pagamento item">
            <button className="selecao-forma" id="pix">
              <i className="fa-brands fa-pix"></i>
              <p className="texto-forma-pagamento">PIX</p>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BotoesCheckout;
