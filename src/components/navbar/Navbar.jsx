import React from "react";

import { FaBars } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar-principal">
      <ul className="lista">
        <li id="menu" class="navbar item">
          <FaBars />
        </li>

        <li className="navbar item">
          <a className="logo" href="#">
            <img
              src="https://media.discordapp.net/attachments/998358787507376228/998359187627200522/kingsman.png?width=400&height=400"
              alt=""
            />
            <p className="navbar-text"></p>
          </a>
        </li>

        <li className="navbar item">
          <FiShoppingBag />
          <div className="item-na-sacola">
            <p id="quantidade">8</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
