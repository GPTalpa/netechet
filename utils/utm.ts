// utils/trackingParams.ts

// Расширенный интерфейс для всех параметров отслеживания
interface TrackingData {
  // UTM метки
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_referrer?: string;

  // OpenStat параметры
  openstat_service?: string;
  openstat_campaign?: string;
  openstat_ad?: string;
  openstat_source?: string;

  // Коллтрекинг и аналитика
  roistat?: string;
  gclientid?: string;
  _ym_uid?: string;
  _ym_counter?: string;

  // ID кликов
  gclid?: string;
  yclid?: string;
  fbclid?: string;

  // Рефереры
  referrer?: string;
  from?: string;

  // Системные
  landing_page?: string;
}

// Все параметры для сбора (список для удобства)
const ALL_PARAMS = [
  // UTM
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_referrer",
  // OpenStat
  "openstat_service",
  "openstat_campaign",
  "openstat_ad",
  "openstat_source",
  // Коллтрекинг
  "roistat",
  "gclientid",
  "_ym_uid",
  "_ym_counter",
  // ID кликов
  "gclid",
  "yclid",
  "fbclid",
  // Рефереры
  "from",
] as const;

type TrackingKey = (typeof ALL_PARAMS)[number];

export function getTrackingParams(): TrackingData {
  let trackingData: TrackingData = {};

  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem("tracking_params");

    if (savedData) {
      // Если данные есть в localStorage - загружаем их
      try {
        trackingData = JSON.parse(savedData) as TrackingData;
      } catch (error) {
        console.error(
          "Failed to parse tracking params from localStorage:",
          error,
        );
        trackingData = {};
      }
    } else {
      // Если в localStorage нет - собираем из текущего URL и браузера
      const urlParams = new URLSearchParams(window.location.search);

      // Собираем все параметры из URL
      ALL_PARAMS.forEach((param) => {
        const value = urlParams.get(param);
        if (value) {
          trackingData[param as TrackingKey] = value;
        }
      });

      // Добавляем referrer из заголовка браузера
      if (document.referrer) {
        trackingData.referrer = document.referrer;
      }

      // Добавляем текущую страницу (landing)
      trackingData.landing_page = window.location.href.split("?")[0];

      // Сохраняем в localStorage, если есть хоть один параметр
      if (Object.keys(trackingData).length > 0) {
        localStorage.setItem("tracking_params", JSON.stringify(trackingData));
      }
    }
  }

  return trackingData;
}

// Функция для сохранения параметров при переходе на сайт
export function saveTrackingOnLoad(): void {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const newParams: TrackingData = {};
    let hasAnyParam = false;

    // Проверяем наличие любых параметров из списка
    ALL_PARAMS.forEach((param) => {
      const value = urlParams.get(param);
      if (value) {
        newParams[param as TrackingKey] = value;
        hasAnyParam = true;
      }
    });

    if (hasAnyParam) {
      // Сохраняем параметры при первом заходе, если их там еще нет
      const existing = localStorage.getItem("tracking_params");
      if (!existing) {
        // Добавляем referrer если есть
        if (document.referrer) {
          newParams.referrer = document.referrer;
        }
        // Добавляем landing page
        newParams.landing_page = window.location.href.split("?")[0];

        localStorage.setItem("tracking_params", JSON.stringify(newParams));
      }
    }
  }
}

// Функция для получения конкретного параметра
export function getTrackingParam(key: TrackingKey): string | undefined {
  if (typeof window === "undefined") return undefined;

  const params = getTrackingParams();
  return params[key];
}

// Функция для проверки наличия параметров
export function hasTrackingParams(): boolean {
  const params = getTrackingParams();
  return Object.keys(params).length > 0;
}

// Опционально: функция для очистки параметров (например, при выходе из аккаунта)
export function clearTrackingParams(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("tracking_params");
  }
}
