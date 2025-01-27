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
    active_robots: "active robots",
    amount_of_energy: "amount of energy",
    time_until_energy_ends: "time until energy ends",
    charge_storage_devices: "Charge storage devices",
    radar: "Radar",
    market: "Market",
    starship: "Starship",
    tasks: "Tasks",
    friends: "Friends",
    friends_tab_info:
      'In the "friends" tab you can see statistics <br /> on the number of referrals of 3 lines <br /> and additional earnings from them.',
  },
  ru: {
    welcome: "Добро пожаловать в Telegram Mini App!",
    firstName: "Имя",
    lastName: "Фамилия",
    username: "Имя пользователя",
    language: "Язык",
    loading: "Загрузка...",
    loadingComplete: "Загрузка завершена!",
    active_robots: "активные роботы",
    amount_of_energy: "количество энергии",
    time_until_energy_ends: "время до окончания энергии",
    charge_storage_devices: "Зарядить устройства хранения",
    radar: "Радар",
    market: "Рынок",
    starship: "Корабль",
    tasks: "Задачи",
    friends: "Друзья",
    friends_tab_info:
      "На вкладке «друзья» вы можете увидеть статистику <br /> по количеству рефералов из 3 линий <br /> и дополнительным доходам от них.",
  },
};

export default translations;
export type { Language };
