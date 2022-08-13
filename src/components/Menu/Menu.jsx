import React from "react";

import { IoIosClose } from "react-icons/io";

import "./Menu.css";

const Menu = () => {
  return (
    <section class="sombra">
      <div id="fundo-sair-menu"></div>
      <nav class="navbar-secundaria">
        <ul class="lista">
          <div class="topo">
            <section id="opcoes">
              <li id="fechar" class="navbar item">
                <IoIosClose />
                <div></div>
                <img
                  src="https://media.discordapp.net/attachments/998358787507376228/998361355700670504/kingsman4.png?width=400&height=400"
                  alt=""
                />
                <div></div>
                <div></div>
              </li>
            </section>
            <section id="login">
              <li class="navbar item">
                <a href={"/login"}>
                  <p class="navbar-text">ENTRAR</p>
                </a>
              </li>
            </section>
            {/* <!-- <div class="barra-separacao"></div> --> */}
            <section id="categoria">
              <li id="categoria-texto-li" class="navbar item">
                <a href={"/"}>
                  <p id="text-categoria" class="navbar-text">
                    CATEGORIAS
                  </p>
                </a>
              </li>
              <div id="categorias">
                <li class="navbar item">
                  <a href={"/"}>
                    <p class="navbar-text">Opção1</p>
                  </a>
                </li>
                <li class="navbar item">
                  <a href={"/"}>
                    <p class="navbar-text">Opção2</p>
                  </a>
                </li>
                <li class="navbar item">
                  <a href={"/"}>
                    <p class="navbar-text">Opção3</p>
                  </a>
                </li>
              </div>
            </section>
            <div class="barra-separacao"></div>
            <section id="novidades">
              <li class="navbar item">
                <a href={"/"}>
                  <p class="navbar-text">NOVIDADES</p>
                </a>
              </li>
            </section>
            <div class="barra-separacao"></div>
            <section id="promocoes">
              <li class="navbar item">
                <a href={"/"}>
                  <p class="navbar-text">PROMOÇÕES</p>
                </a>
              </li>
            </section>
            <div class="barra-separacao"></div>
            <section id="duvidas-sac">
              <li class="navbar item">
                <a href={"/"}>
                  <p class="navbar-text">DÚVIDAS E SAC</p>
                </a>
              </li>
            </section>
            <div class="barra-separacao"></div>
          </div>

          <div class="baixo">
            <li class="navbar item">
              <a href={"/"}>
                {/* <!-- <p class="navbar-text" id="kingsman">KingsMan</p> --> */}
                <img
                  src="https://media.discordapp.net/attachments/998358787507376228/998361355700670504/kingsman4.png?width=400&height=400"
                  alt=""
                />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
