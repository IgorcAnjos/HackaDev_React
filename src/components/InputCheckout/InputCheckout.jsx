import React from "react";

import "./InputCheckout.css";

const InputCheckout = ({ texto, type, nome, id, size, maxLength }) => {
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
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputCheckout;
