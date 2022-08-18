import React from "react";

import { IoIosArrowBack } from "react-icons/io";

import "./Header.css";

const Header = ({ texto }) => {
  return (
    <div className="header">
      <header class="sair-descricao">
        <a href="javascript:history.back()">
          <IoIosArrowBack />
        </a>

        <p class="texto-descricao">{texto}</p>
      </header>
    </div>
  );
};

export default Header;
