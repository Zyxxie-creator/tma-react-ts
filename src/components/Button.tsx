import React from "react";
import "../styles/Button.scss";

const Button: React.FC = () => {
  return (
    <div className="button">
      <div className="button-in">
        <span className="button-text">Charge storage devices</span>
        <div className="button-icon"> </div>
      </div>
    </div>
  );
};

export default Button;
