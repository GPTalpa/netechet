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
    question: "Какой у вас фундамент?",
    type: "options",
    options: ["Ленточный", "Свайный", "УШП (плита)", "Нет дома"],
  },
  {
    id: 2,
    key: "lvlWater",
    question: "Уровень грунтовых вод?",
    type: "options",
    options: ["Высокий", "Низкий"],
  },
  {
    id: 3,
    key: "service",
    question: "Какая услуга требуется?",
    type: "options",
    allowCustom: true,
    options: ["Дренаж", "Отмостка", "Дренаж + Отмостка", "Гидроизоляция"],
  },
  {
    id: 4,
    key: "term",
    question: "Когда готовы встретиться с выездным инженером на объекте?",
    type: "options",
    allowCustom: true,
    options: ["В течении 3х дней", "В течении недели", "В течении 2-х недель "],
  },
];

export const quizDataModal: QuizStep[] = [
  {
    id: 10,
    key: "foundation",
    question: "Какой у вас фундамент?",
    type: "options",
    options: ["Ленточный", "Свайный", "УШП (плита)", "Нет дома"],
  },
  {
    id: 20,
    key: "lvlWater",
    question: "Уровень грунтовых вод?",
    type: "options",
    options: ["Высокий", "Низкий"],
  },
  {
    id: 30,
    key: "service",
    question: "Какая услуга требуется?",
    type: "options",
    allowCustom: true,
    options: ["Дренаж", "Отмостка", "Дренаж + Отмостка", "Гидроизоляция"],
  },
  {
    id: 40,
    key: "term",
    question: "Когда готовы встретиться с выездным инженером на объекте?",
    type: "options",
    allowCustom: true,
    options: ["В течении 3х дней", "В течении недели", "В течении 2-х недель "],
  },
];
