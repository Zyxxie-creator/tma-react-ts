import React from "react";
import translations, { Language } from "../translations/translations";
import "../styles/MainScreen.scss";
import Dashboard from "./Dashboard";
import Button from "./Button";
import TapBar from "./TapBar";

interface MainScreenProps {
  userData: {
    first_name: string;
    last_name: string;
    username: string;
    language_code: Language;
  };
  language: Language;
}

const MainScreen: React.FC<MainScreenProps> = ({ userData, language }) => {
  return (
    <div className="main-screen">
      <div className="background-planet" />
      <div className="background-main" />
      <Dashboard userData={userData} />
      <Button language={language} />
      <TapBar language={language} />
    </div>
  );
};

export default MainScreen;
