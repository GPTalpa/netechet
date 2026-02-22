"use client";

import { useReducer, useState } from "react";
import { quizData, quizDataModal } from "@/data/quizData";
import RadioCard from "@components/RadioCard";
import QuizFormModal from "./QuizFormModal";

type QuizKey = "foundation" | "lvlWater" | "service" | "term";

type QuizAnswers = Partial<Record<QuizKey, string>>;

type State = {
  step: number;
  answers: QuizAnswers;
};

type Action =
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "ANSWER"; key: QuizKey; value: string }
  | { type: "RESET" };

const initialState: State = {
  step: 0,
  answers: {},
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "NEXT":
      return { ...state, step: state.step + 1 };
    case "BACK":
      return { ...state, step: state.step - 1 };
    case "ANSWER":
      return {
        ...state,
        answers: { ...state.answers, [action.key]: action.value },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function Quiz({ type }: { type: "modal" | "page" }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [customValue, setCustomValue] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const setterCurent = () => {
    if (type === "modal") {
      return quizDataModal;
    } else {
      return quizData;
    }
  };

  const quizDataCurrent = setterCurent();

  const current = quizDataCurrent[state.step];

  const handleNext = async () => {
    if (state.step < quizDataCurrent.length - 1) {
      dispatch({ type: "NEXT" });
    } else {
      setIsFormOpen(true);
      //   dispatch({ type: "RESET" });
    }
  };

  const handleBack = () => {
    dispatch({ type: "BACK" });
  };

  const handleAnswer = (value: string) => {
    dispatch({
      type: "ANSWER",
      key: current.key,
      value,
    });
  };

  return (
    <div className="drainage-quiz__content">
      {!isFormOpen && (
        <>
          <div className="drainage-quiz__question">{current.question}</div>
          <div className="drainage-quiz__answers">
            {/* OPTIONS */}
            {current.type === "options" &&
              current.options?.map((option, index) => {
                const id = `question-${current.id}-${index}`;
                return (
                  <RadioCard
                    key={option}
                    id={id}
                    name={`question-${current.id}`}
                    value={option}
                    checked={state.answers[current.key] === option}
                    onChange={(value) => handleAnswer(value)}
                  >
                    {option}
                  </RadioCard>
                );
              })}

            {/* CUSTOM OPTION */}
            {current.type === "options" && current.allowCustom && (
              <>
                <input
                  type="text"
                  placeholder="Свой ответ (напишите)"
                  value={customValue}
                  className="quiz-radio__label"
                  onChange={(e) => {
                    setCustomValue(e.target.value);
                    handleAnswer(e.target.value);
                  }}
                />
              </>
            )}
          </div>

          <div className="drainage-quiz__btns">
            {state.step > 0 && (
              <button
                className="drainage-quiz__btns--back"
                onClick={handleBack}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M12.5417 16.5999L7.10835 11.1666C6.46669 10.5249 6.46669 9.4749 7.10835 8.83324L12.5417 3.3999"
                    stroke="#C3C3C3"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            <button
              className="drainage-quiz__btns--continue"
              onClick={handleNext}
            >
              далее
            </button>
          </div>
        </>
      )}
      {isFormOpen && (
        <QuizFormModal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          quizAnswers={state.answers}
        />
      )}
    </div>
  );
}
