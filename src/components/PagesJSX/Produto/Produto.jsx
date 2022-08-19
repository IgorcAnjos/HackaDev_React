import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import "./Produto.css";

const Produto = ({
  ListaDeProdutos,
  listaCarrinho,
  handleAdicaoListaCarrinnho,
  handleSubtracaoListaCarrinnho,
  handleExcluirListaCarrinnho,
  subTotal,
  handleSubTotal,
}) => {
  const parametros = useParams();

  const idParamentro = parseInt(parametros.id);

  const findProduto = ListaDeProdutos.filter(
    (produto) => produto.id === idParamentro
  ); //

  const produto = findProduto[0];

  return (
    <div className="cont">
      <Navbar
        listaCarrinho={listaCarrinho}
        handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
        handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
        handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
        subTotal={subTotal}
        handleSubTotal={handleSubTotal}
        ListaDeProdutos={ListaDeProdutos}
      />
      <div className="container-produto">
        <div className="foto-section">
          <img className="foto-produto" src={produto.imagem} alt="" />
        </div>

        <div className="informacoes">
          <div className="nome-preco-parcelas">
            <h1 className="nome">{produto.nome}</h1>
            <div className="preco-parcelas">
              <p className="preco">R$ {produto.preco.toFixed(2)}</p>
              <p className="parcelas">
                em até 3x {(produto.preco / 3).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="selecao-tamnho">
            <h4 className="tamanho">Escolha o tamanho</h4>
            <select defaultValue={"p"} class="tamanho-input" id="tamanho">
              <option value="p" selected="selected">
                P
              </option>
              <option value="m">M</option>
              <option value="g">G</option>
            </select>
          </div>

          <div className="section-botao">
            <button
              className="adicionar-sacola"
              onClick={() => {
                const select = document.getElementById("tamanho");
                const tamanho = select.value;
                handleAdicaoListaCarrinnho(produto.id, tamanho);
              }}
            >
              Adicionar à Sacola
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Produto;
