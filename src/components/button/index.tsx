import React from "react";
import "./style.scss";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => (
  <button className="custom-button" onClick={onClick}>
    ボタン
  </button>
);

export default Button;
