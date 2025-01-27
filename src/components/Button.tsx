import React from "react";
import translations, { Language } from "../translations/translations";
import "../styles/Button.scss";

interface ButtonProps {
  language: Language;
}

const Button: React.FC<ButtonProps> = ({ language }) => {
  return (
    <div className="button">
      <div className="button-in">
        <span className="button-text">
          {translations[language].charge_storage_devices}
        </span>
        <div className="button-icon"> </div>
      </div>
    </div>
  );
};

export default Button;
