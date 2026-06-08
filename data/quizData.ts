type QuizKey = "foundation" | "lvlWater" | "service" | "term";

type QuizStep = {
  id: number;
  key: QuizKey;
  question: string;
  type: "options";
  options?: string[];
  allowCustom?: boolean;
};

export const quizData: QuizStep[] = [
  {
    id: 1,
    key: "foundation",
    question: "Какой у вас тип участка?",
    type: "options",
    options: ["Песок", "Глина", "Суглинок", "Супесь"],
  },
  {
    id: 2,
    key: "term",
    question: "В течении какого времени планируете установить дренаж?",
    type: "options",
    options: [
      "Как можно скорее",
      "В течении недели",
      "В течении месяца",
      "Пока не знаю",
    ],
  },
  {
    id: 3,
    key: "service",
    question: "Сколько метров дренажа вам нужно установить?",
    type: "options",
    allowCustom: true,
    options: ["Не знаю"],
  },
];

export const quizDataModal: QuizStep[] = [
  {
    id: 10,
    key: "foundation",
    question: "Какой у вас тип участка?",
    type: "options",
    options: ["Песок", "Глина", "Суглинок", "Супесь"],
  },
  {
    id: 20,
    key: "term",
    question: "В течении какого времени планируете установить дренаж?",
    type: "options",
    options: [
      "Как можно скорее",
      "В течении недели",
      "В течении месяца",
      "Пока не знаю",
    ],
  },
  {
    id: 30,
    key: "service",
    question: "Сколько метров дренажа вам нужно установить?",
    type: "options",
    allowCustom: true,
    options: ["Не знаю"],
  },
];
