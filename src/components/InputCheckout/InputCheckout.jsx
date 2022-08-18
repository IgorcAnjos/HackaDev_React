import React from "react";

import "./InputCheckout.css";

<<<<<<< HEAD
const InputCheckout = ({
  texto,
  type,
  nome,
  id,
  size = 50,
  maxlength = 50,
  pattern,
}) => {
=======
const InputCheckout = ({ texto, type, nome, id, size, maxLength }) => {
>>>>>>> 3dc626d6e8fdea63c37e06793661fe986f215a33
  return (
    <div className="input-checkout">
      <label className="label-texto" htmlFor={id}>
        {texto}
      </label>
      <input
        type={type}
        name={nome}
        id={id}
        size={size}
<<<<<<< HEAD
        maxLength={maxlength}
        pattern={pattern}
        required
=======
        maxLength={maxLength}
>>>>>>> 3dc626d6e8fdea63c37e06793661fe986f215a33
      />
    </div>
  );
};

export default InputCheckout;
