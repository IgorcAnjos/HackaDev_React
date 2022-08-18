import React from "react";
import Header from "../../Header/Header";
import InputCheckout from "../../InputCheckout/InputCheckout";
import "./Login.css";

const Login = () => {
  return (
    <main className="login-main">
      <Header texto="Login" />
      <section className="login-section">
        <form className="login-form" action="">
          <InputCheckout
            texto="E-mail"
            type="email"
            nome="email-usuario"
            id="email-usuario"
            size="50"
            maxlength="50"
          />
          <InputCheckout
            texto="Senha"
            type="password"
            nome="senha-usuario"
            id="senha-usuario"
            size="20"
            maxLength="20"
          />
          <a href="../../home.html" className="login-link">
            Esqueceu sua senha?
          </a>

          <a className="botao-entrar" href="../../home.html">
            <button className="login-btn">Entrar</button>
          </a>
        </form>

        <div className="redirect-cadastro">
          <p id="ou">-ou-</p>
          <a href="/cadastro" className="login-link">
            Ainda não é cadastrado?
          </a>
        </div>
      </section>
    </main>
  );
};

export default Login;
