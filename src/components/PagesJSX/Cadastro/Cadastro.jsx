import { React, useState } from "react";

const Cadastro = () => {
  const [valoresCadastro, setValoresCadastro] = useState({
    usuarioNome: "",
    usuarioEmail: "",
    usuarioSenha: "",
    usuarioPais: "",
    usuarioCep: "",
    usuarioEndereco: "",
    usuarioCidade: "",
    usuarioBairro: "",
    usuarioEstado: "",
    usuarioComplemento: "",
  });

  const inputs = [
    {
      idNum: 1,
      name: "usuarioNome",
      id: "nome-usuario",
      label: "Nome completo",
      type: "text",
      placeholder: "Seu nome completo",
      required: true,
      errorMessage: "digite o seu nome",
    },
    {
      idNum: 2,
      name: "usuarioEmail",
      id: "email-usuario",
      label: "E-mail",
      type: "email",
      placeholder: "Seu e-mail",
      required: true,
      errorMessage: "Por favor digite um email válido",
    },
    {
      idNum: 3,
      name: "usuarioSenha",
      id: "senha-usuario",
      label: "Senha",
      type: "password",
      placeholder: "",
      pattern: ".{8, 20}",
      required: true,
      errorMessage: "Sua senha deve ter no mínimo 8 caracteres",
    },
    // {
    //   idNum: 4,
    //   name: "usuarioPais",
    //   id: "endereco-pais",
    //   label: "País",
    //   type: "select",
    //   pattern:
    // },
    // {
    //   idNum: 5,
    //   name: "usuarioCep",
    //   id: "endereco-cep",
    //   label: "CEP",
    //   type: "tel",
    //   pattern:
    // },
    {
      idNum: 6,
      name: "usuarioEndereco",
      id: "endereco",
      label: "Endereço",
      type: "text",
      placeholder: "",
      pattern: ".{, 50}",
      required: true,
      errorMessage: "",
    },
    {
      idNum: 7,
      name: "usuarioCidade",
      id: "endereco-cidade",
      label: "Cidade",
      type: "text",
      placeholder: "",
      pattern: ".{, 30}",
      required: true,
      errorMessage: "",
    },
    {
      idNum: 8,
      name: "usuarioBairro",
      id: "endereco-bairro",
      label: "Bairro",
      type: "text",
      placeholder: "",
      pattern: ".{, 30}",
      required: true,
      errorMessage: "",
    },
    {
      idNum: 9,
      name: "usuarioEstado",
      id: "endereco-estado",
      label: "Estado",
      type: "text",
      placeholder: "",
      pattern: "^[A-Z]{2}",
      required: true,
      errorMessage: "",
    },
    {
      idNum: 9,
      name: "usuarioComplemento",
      id: "endereco-complemento",
      label: "Complemento",
      type: "text",
      placeholder: "",
      pattern: ".{, 50}",
      required: true,
      errorMessage: "",
    },
  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const onChange = (e) => {
  //   setValoresCadastro({ ...valoresCadastro, [e.target.name]: e.target.value });
  // };

  return (
    <main class="cadastro-main">
      <section class="cadastro-section">
        <form action="" id="form-cadastro">
          {inputs.map((input) => (
            <InputLoginCadastro
              key={input.idNum}
              {...input}
              value={valoresCadastro[input.name]}
            />
          ))}
          <div class="enviar-cadastro">
            <a href="../../home.html">
              <button class="enviar-button">Enviar</button>
            </a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Cadastro;
