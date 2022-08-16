import React from "react";

const Cadastro = () => {
  const [cadastroValores, setCadastroValores] = useState({
    usuarioNome: "",
    usuarioEmail: "",
    usuarioSenha: "",
    usuarioPais: "",
    usuarioCep: "",
    usuarioEndereco: "",
    usuarioCidade: "",
    usuarioBairro: "",
    usuarioEstado: "",
    usuarioComplemento: ""
  });

  const inputs = [
    {
      idNum: 1,
      name: "usuarioNome",
      id: "nome-usuario",
      label: "Nome completo",
      type: "text",
      size: 50,
      maxlength: 50,
    },
    {
      idNum: 2,
      name: "usuarioEmail",
      id: "email-usuario",
      label: "E-mail",
      type: "password",
      size: 25,
      maxlength: 25,
    },
    {
      idNum: 3,
      name: "usuarioSenha",
      id: "senha-usuario",
      label: "E-mail",
      type: "password",
      size: 25,
      maxlength: 25,
    },
    // {
    //   idNum: 4,
    //   name: "usuarioEmail",
    //   id: "email-usuario",
    //   label: "E-mail",
    //   type: "password",
    //   size: 25,
    //   maxlength: 25,
    // },
    {
    //   idNum: 5,
    //   name: "usuarioEndereco",
    //   id: "email-usuario",
    //   label: "E-mail",
    //   type: "password",
    //   size: 25,
    //   maxlength: 25,
    // },
    {
      idNum: 6,
      name: "usuarioEndereco",
      id: "endereco",
      label: "Endereço",
      type: "text",
      size: 50,
      maxlength: 50,
    },
    {
      idNum: 7,
      name: "usuarioCidade",
      id: "endereco-cidade",
      label: "Cidade",
      type: "text",
      size: 30,
      maxlength: 30,
    },
    {
      idNum: 8,
      name: "usuarioBairro",
      id: "endereco-bairro",
      label: "Bairro",
      type: "text",
      size: 30,
      maxlength: 30,
    },
    {
      idNum: 9,
      name: "usuarioEstado",
      id: "endereco-estado",
      label: "Estado",
      type: "text",
      size: 2,
      maxlength: 2,
    },
    {
      idNum: 9,
      name: "usuarioComplemento",
      id: "endereco-complemento",
      label: "Complemento",
      type: "text",
      size: 50,
      maxlength: 50,
    },
  ];

  return (
    <main class="cadastro-main">
      <section class="cadastro-section">

        <form action="" id="form-cadastro">
          {inputs.map((input) => (
            <InputLoginCadastro
              key={input.idNum}
              {...input}
              value={cadastroValores[input.name]}
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
