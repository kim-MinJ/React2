import { useState } from "react";
import "./App.scss";

const quizData = [
  {
    //quiz의 데이터 입력
    question:
      "useState를 사용하여 상태를 초기화할 때 올바른 코드 형태는 무엇인가요?",
    options: [
      "const [state, setState] = useState();",
      "const state = useState();",
      "const [state, setState] = useState(initialValue);",
      "const setState = useState(initialValue);",
    ],
    answer: 2,
    explanation:
      "useState는 상태와 상태를 업데이트하는 함수를 반환합니다. 초기값을 설정하려면 useState(initialValue)를 사용해야 하며, [state, setState] 형태로 구조분해 할당합니다.",
  },
  {
    question: "useEffect는 어떤 상황에서 실행되나요?", //<= 질문 저장
    options: [
      //<= 항목 저장
      "컴포넌트가 처음 렌더링될 때만 실행된다.",
      "컴포넌트가 렌더링될 때마다 실행된다.",
      "의존성 배열에 명시된 값이 변경될 때 실행된다.",
      "컴포넌트가 언마운트될 때만 실행된다.",
    ],
    answer: 2, //<=정답 저장
    //<= 해설 저장
    explanation:
      "useEffect는 의존성 배열을 기반으로 실행됩니다. 특정 값이 포함되어 있으면 해당 값이 변경될 때 실행됩니다.",
  },
  {
    question: "useEffect에서 반환된 함수는 언제 실행되나요?",
    options: [
      "컴포넌트가 처음 렌더링될 때",
      "컴포넌트가 언마운트될 때",
      "의존성 배열의 값이 변경될 때",
      "컴포넌트가 업데이트될 때",
    ],
    answer: 1,
    explanation:
      "useEffect에서 반환된 함수는 컴포넌트가 언마운트될 때 실행되며, 의존성 배열 값이 변경될 때도 이전 효과를 정리하기 위해 실행됩니다.",
  },
  {
    question: "useState 상태 업데이트 함수의 특징은?",
    options: [
      "현재 상태를 직접 수정한다.",
      "비동기적으로 상태를 업데이트한다.",
      "상태를 즉시 업데이트한다.",
      "상태를 초기화한다.",
    ],
    answer: 1,
    explanation:
      "useState의 상태 업데이트 함수는 비동기적으로 작동하며, 상태를 직접 수정하지 않고 새로운 값을 설정합니다.",
  },
  {
    question: "useEffect의 의존성 배열을 빈 배열로 설정하면?",
    options: [
      "useEffect가 실행되지 않는다.",
      "처음 렌더링될 때만 실행된다.",
      "렌더링될 때마다 실행된다.",
      "언마운트될 때만 실행된다.",
    ],
    answer: 1,
    explanation:
      "빈 배열로 설정하면 useEffect는 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.",
  },
];

function App() {
  const [current, setCurrent] = useState(0); //문제 번호 저장
  const [selected, setSelected] = useState(null); //사용자가 선택한 답 보기 저장
  const [showExplanation, setShowExplanation] = useState(false); //해설 보여줄지 여부 저장
  const [score, setScore] = useState(0); //맞힌 문제수 저장
  //<= 상태 변환값 저장

  const handleOptionClick = (index) => {
    if (selected !== null) return; //한번 선택한 상태라면 클릭 못하게

    setSelected(index); //사용자가 선택한 번호 저장
    setShowExplanation(true); //해설보여주기 시작
    if (index === quizData[current].answer) {
      //선택한 번호가 정답이면 점수 +1
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowExplanation(false); //<= 선택 상태와 해설 초기화
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setCurrent(quizData.length);
    }
  }; //<= 다음 문제로 넘어가거나 끝이면 종료로 이동

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
  }; //<= 모든 상태 초기화 퀴즈 처음부터 다시 시작

  return (
    <div className="app-wrapper">
      <div className="quiz-card">
        <h2>📘 React Hook 퀴즈</h2>
        {/* 전체 퀴즈 카드 UI 시작 */}

        {current < quizData.length ? (
          // 문제가 남아 있다면 문제 화면을 보여줌
          <>
            <h3>{quizData[current].question}</h3>
            {/* 현재 문제 출력 */}
            <ul className="options">
              {quizData[current].options.map((opt, i) => (
                <li key={i}>
                  {/* 보기를 반복문들로 렌더링 */}
                  <button
                    className={`option-btn
                      ${
                        selected !== null && i === quizData[current].answer
                          ? "correct"
                          : ""
                      }
                      ${
                        selected !== null &&
                        i === selected &&
                        i !== quizData[current].answer
                          ? "wrong"
                          : ""
                      }
                    `}
                    onClick={() => handleOptionClick(i)}
                    disabled={selected !== null}
                  >
                    {opt}
                  </button>
                  {/* 버튼 정답/오답따라 클래스부여(색상) , 클릭한 답안 선택처리, 이미 선택시 비활성화 */}
                </li>
              ))}
            </ul>

            {showExplanation && (
              <>
                <p>
                  <strong>해설:</strong> {quizData[current].explanation}
                </p>
                <button className="next-btn" onClick={handleNext}>
                  {current + 1 < quizData.length ? "다음 문제" : "결과 보기"}
                </button>
              </>
            )}
            {/* 해설이 보일 때만 해설 문장과 "다음 문제" 버튼을 보여줌 */}
          </>
        ) : (
          <div className="result">
            <h3>퀴즈 완료!</h3>
            <p>
              총 점수: {score} / {quizData.length}
            </p>
            <button className="next-btn" onClick={handleRestart}>
              다시 시작
            </button>
          </div>
          // 문제를 다 풀면 점수와 '다시 시작' 버튼을 보여줌
        )}
      </div>
    </div>
  );
}

export default App;
