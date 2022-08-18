import React from "react";

import "./InputCheckout.css";

const InputCheckout = ({ texto, type, nome, id, size, maxlength }) => {
  return (
    <div className="input-checkout">
      <label class="label-texto" for={id}>
        {texto}
      </label>
      <input
        type={type}
        name={nome}
        id={id}
        size={size}
        maxlength={maxlength}
      />
    </div>
  );
};

export default InputCheckout;
