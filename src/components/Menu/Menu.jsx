import React from "react";
import { Link } from "react-router-dom";

import { IoIosClose } from "react-icons/io";

import "./Menu.css";

const Menu = ({ abrirMenu, setAbrirMenu }) => {
  if (window.innerWidth >= 900) {
    setAbrirMenu(true);
  }

  return abrirMenu ? (
    <section className="sombra">
      <div
        id="fundo-sair-menu"
        onClick={() => {
          setAbrirMenu(!abrirMenu);
        }}
      ></div>
      <nav className="navbar-secundaria">
        <ul className="lista">
          <div className="topo">
            <section id="opcoes">
              <li id="fechar" className="navbar item">
                <IoIosClose
                  onClick={() => {
                    setAbrirMenu(false);
                  }}
                />
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
              <li className="navbar item">
                <Link to="/login">
                  <p className="navbar-text">ENTRAR</p>
                </Link>
              </li>
            </section>
            <section id="buscar">
              <li className="navbar item">
                <Link to="/busca">
                  <p className="navbar-text">BUSCAR</p>
                </Link>
              </li>
            </section>
            <div className="barra-separacao"></div>
            <section id="categoria">
              <li id="categoria-texto-li" className="navbar item">
                <a href={"/"}>
                  <p id="text-categoria" className="navbar-text">
                    CATEGORIAS
                  </p>
                </a>
              </li>
              <div id="categorias">
                <li className="navbar item">
                  <a href={"/"}>
                    <p className="navbar-text">Opção1</p>
                  </a>
                </li>
                <li className="navbar item">
                  <a href={"/"}>
                    <p className="navbar-text">Opção2</p>
                  </a>
                </li>
                <li className="navbar item">
                  <a href={"/"}>
                    <p className="navbar-text">Opção3</p>
                  </a>
                </li>
              </div>
            </section>
            <div className="barra-separacao"></div>
            <section id="novidades">
              <li className="navbar item">
                <a href={"/"}>
                  <p className="navbar-text">NOVIDADES</p>
                </a>
              </li>
            </section>
            <div className="barra-separacao"></div>
            <section id="promocoes">
              <li className="navbar item">
                <a href={"/"}>
                  <p className="navbar-text">PROMOÇÕES</p>
                </a>
              </li>
            </section>
            <div className="barra-separacao"></div>
            <section id="duvidas-sac">
              <li className="navbar item">
                <a href={"/"}>
                  <p className="navbar-text">DÚVIDAS E SAC</p>
                </a>
              </li>
            </section>
            <div className="barra-separacao"></div>
          </div>

          <div className="baixo">
            <li className="navbar item">
              <a href={"/"}>
                {/* <!-- <p className="navbar-text" id="kingsman">KingsMan</p> --> */}
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
  ) : (
    ""
  );
};

export default Menu;
