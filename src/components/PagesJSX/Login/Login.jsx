import React, { useState } from "react";
import InputLoginCadastro from "../../InputLoginCadastro/InputLoginCadastro";

const Login = () => {
  //hook para manipulação do formulário, um valor para cada input
  const [valoresLogin, setValoresLogin] = useState({
    usuarioEmail: "",
    usuarioSenha: "",
  });

  //array passado como props para component inputLoginCadastro
  const inputs = [
    {
      idNum: 1,
      name: "usuarioEmail",
      id: "email-usuario",
      label: "E-mail",
      type: "text",
      pattern: "",
      required: true,
      errorMessage: "",
    },
    {
      idNum: 2,
      name: "usuarioSenha",
      id: "senha-usuario",
      label: "Senha",
      type: "password",
      pattern: "",
      required: true,
      errorMessage: "",
    },
  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const onChange = (e) => {
  //   setValoresLogin({ ...valoresLogin, [e.target.name]: e.target.value });
  // };

  return (
    <main class="login-main">
      <section class="login-section">
        <form class="login-form" action="">
          {inputs.map((input) => (
            <InputLoginCadastro
              key={input.idNum}
              {...input}
              value={valoresLogin[input.name]}
            />
          ))}

          <a href="../../home.html" class="login-link">
            Esqueceu sua senha?
          </a>

          <a class="botao-entrar" href="../../home.html">
            <button class="login-btn">Entrar</button>
          </a>
        </form>

        <div class="redirect-cadastro">
          <p id="ou">-ou-</p>
          <a href="../pages/cadastro.html" class="login-link">
            Ainda não é cadastrado?
          </a>
        </div>
      </section>
    </main>
  );
};

export default Login;
