import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import MainScreen from "./MainScreen";
import translations, { Language } from "../translations/translations";
import "../styles/App.scss";

interface AppProps {
  userData: {
    first_name: string;
    last_name: string;
    username: string;
    language_code: Language;
  };
}

const App: React.FC<AppProps> = ({ userData }) => {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    if (userData.language_code === "ru" || userData.language_code === "en") {
      setLanguage(userData.language_code);
    } else {
      setLanguage("en");
    }

    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, [userData]);

  return (
    <div className="app">
      {loading ? (
        <Loader language={language} />
      ) : (
        <MainScreen userData={userData} language={language} />
      )}
    </div>
  );
};

export default App;
