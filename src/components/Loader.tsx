import React, { useEffect, useState } from "react";
import "../styles/Loader.scss";
import translations, { Language } from "../translations/translations";

interface LoaderProps {
  language: Language;
}

const Loader: React.FC<LoaderProps> = ({ language }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const increment = 100 / (duration / 100);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <div className="loader__header">Wars Stars: Expedition</div>
      <div className="loader__content">
        <p className="loader__text">
          {progress < 100
            ? translations[language].loading
            : translations[language].loadingComplete}
        </p>
        <div className="loader__progress-bar">
          <div className="loader__progress" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader__info-block">
          <p
            dangerouslySetInnerHTML={{
              __html: translations[language].friends_tab_info,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
