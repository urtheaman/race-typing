import {
  ChangeEvent,
  Fragment,
  KeyboardEvent,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import randomWords from "random-words";
import Timer from "./timer";
const WORDS_COUNT = 200;

type Actions =
  | {
      type: "startTimer";
      payload: boolean;
    }
  | {
      type: "words";
      payload: string[];
    }
  | { type: "currentInput"; payload: string };

// interface State {
//   startTimer: boolean;
//   words: string[];
//   currentInput: string;
// }

const reducer = (state: any, action: Actions) => {
  switch (action.type) {
    case "startTimer":
      return { ...state, startTimer: action.payload };
    case "words":
      return { ...state, words: action.payload };
    case "currentInput":
      return { ...state, currentInput: action.payload };
    default:
      throw "Not an action type";
  }
};

const Editor = () => {
  const [{ words, startTimer, currentInput }, dispatch] = useReducer(reducer, {
    startTimer: false,
    words: [""],
    currentInput: "",
  });

  useEffect(() => {
    console.count("Effect Word generate");
    dispatch({ type: "words", payload: generateWords() });
  }, []);

  const generateWords = useCallback(() => {
    return new Array(WORDS_COUNT).fill(null).map(() => randomWords());
  }, []);

  const HandleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!startTimer) dispatch({ type: "startTimer", payload: true });
    
  };
  const HandleInput = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "currentInput", payload: e.target.value });

  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <div className="max-w-6xl space-y-8">
        <Timer
          startTimer={startTimer}
          startEnabled={(value: boolean) =>
            dispatch({ type: "startTimer", payload: value })
          }
        />
        <div className="text-2xl">
          {words.map((word: string, index: number) => (
            <Fragment key={index}>
              <span>{word}</span>{" "}
            </Fragment>
          ))}
        </div>
        <input
          type="text"
          autoFocus
          spellCheck={false}
          value={currentInput}
          onKeyDown={HandleKeyPress}
          onChange={HandleInput}
          className="input input-lg w-full input-bordered text-2xl"
        />
      </div>
    </div>
  );
};

export default Editor;
