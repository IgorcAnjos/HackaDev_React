import React from "react";

import { IoIosArrowBack } from "react-icons/io";

import "./Header.css";

const Header = ({ texto }) => {
  return (
    <div className="header">
      <header className="sair-descricao">
        <a href="javascript:history.back()">
          <IoIosArrowBack />
        </a>

        <p className="texto-descricao">{texto}</p>
      </header>
    </div>
  );
};

export default Header;
