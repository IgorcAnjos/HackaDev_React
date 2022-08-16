import React from "react";
import { useParams } from "react-router-dom";
import Carrinho from "../../Carrinho/Carrinho";
import Navbar from "../../Navbar/Navbar";


import "./Produto.css"

const Produto = ({ ListaDeProdutos, listaCarrinho, handleAdicaoListaCarrinnho, handleSubtracaoListaCarrinnho, handleExcluirListaCarrinnho, subTotal, handleSubTotal  }) => {
  const parametros = useParams()

  const idParamentro = parseInt(parametros.id)

  const findProduto = ListaDeProdutos.filter(
    (produto) => produto.id === idParamentro
  );// 

  
  const produto = findProduto[0]

  return (
    <>
      <Navbar
        listaCarrinho={listaCarrinho}
        handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
        handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
        handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
        subTotal={subTotal}
        handleSubTotal={handleSubTotal}
      />
      <div className="container">
      <div className="foto-section">
        <img className="photo1" src={produto.imagem} />
      </div>

      <div className="informacoes">
        <div className="text">
          <h1>{produto.nome}</h1>
          <h2>R$ {produto.preco}</h2>
          <h4 className="a">em até 3x {(produto.preco/3).toFixed(2)}</h4>
          <h4 className="b">Escolha o tamanho</h4>
        </div>
        <div className="select">
          <select class="cadastro-input" name="paises" id="endereco-pais">
            <option value="P" selected="selected">P</option>
            <option value="M" >M</option>
            <option value="G" >G</option>
          </select>
        </div>

        <div className="action">
          <button className="button" onClick={() => {
            handleAdicaoListaCarrinnho(produto.id, "M")
          }}>Adicionar à Sacola</button>
        </div>
      </div>
    </div>
  </>

  );
};

export default Produto;
