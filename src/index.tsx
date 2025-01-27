import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import "./styles/App.scss";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

const initializeTelegramSDK = async (): Promise<any> => {
  try {
    console.log("Инициализация окружения Telegram");

    const { initDataRaw, initData } = retrieveLaunchParams();

    if (!initData?.user) {
      throw new Error("Данные пользователя отсутствуют");
    }

    return {
      id: initData.user.id,
      first_name: initData.user.firstName,
      last_name: initData.user.lastName,
      username: initData.user.username,
      language_code: initData.user.languageCode,
      is_premium: initData.user.isPremium,
    };
  } catch (error) {
    console.error("Ошибка при инициализации Telegram:", error);

    // Эмуляция данных пользователя Telegram
    return {
      id: 99281932,
      first_name: "Andrew",
      last_name: "Rogue",
      username: "Zyxxie",
      language_code: "en", // Замените на 'en' для тестирования английского языка
      is_premium: true,
    };
  }
};

const preventDefaultBehavior = (event: TouchEvent): void => {
  event.preventDefault();
};

document.addEventListener("touchmove", preventDefaultBehavior, {
  passive: false,
});

(async () => {
  const userData = await initializeTelegramSDK();

  root.render(
      <App userData={userData} />
  );
})();
