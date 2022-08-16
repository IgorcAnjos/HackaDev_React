import React from "react";

function InputLoginCadastro() {
  return (
    <>
      <label class="login-label" for="senha-usuario">
        Senha
      </label>
      <input
        class="login-input"
        type="password"
        size="25"
        maxlength="25"
        id="senha-usuario"
      />
    </>
  );
}

export default InputLoginCadastro;
