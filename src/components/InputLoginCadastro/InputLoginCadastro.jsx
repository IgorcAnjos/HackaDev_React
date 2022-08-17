import React from "react";

function InputLoginCadastro(props) {
  //configurar os props para cada atributo do input, realizar destructring
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <>
      <label for={id}>{label}</label>
      <input id={id} {...inputProps} />
      <span>{errorMessage}</span>
    </>
  );
}

export default InputLoginCadastro;
