import { navigate } from "@reach/router";
import React from "react";
import "./Utils.css";

const InputGroup = (props) => {
  const { label, value, type, handleChange, name } = props;

  return (
    <div className="InputGroup">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`Button ${className}`} {...props}>
      {children}
    </button>
  );
};

export { InputGroup, Button };
