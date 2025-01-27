type Language = "en" | "ru";

const translations: Record<Language, { [key: string]: string }> = {
  en: {
    welcome: "Welcome to the Telegram Mini App!",
    firstName: "First Name",
    lastName: "Last Name",
    username: "Username",
    language: "Language",
    loading: "Loading...",
    loadingComplete: "Loading complete!",
  },
  ru: {
    welcome: "Добро пожаловать в Telegram Mini App!",
    firstName: "Имя",
    lastName: "Фамилия",
    username: "Имя пользователя",
    language: "Язык",
    loading: "Загрузка...",
    loadingComplete: "Загрузка завершена!",
  },
};

export default translations;
export type { Language };
