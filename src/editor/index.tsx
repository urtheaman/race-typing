import { Fragment, useEffect, useState } from "react";
import randomWords from "random-words";
import Timer from "./Timer";
const WORDS_COUNT = 200;

const Editor = () => {
  const [words, setWords] = useState<string[]>([]);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  const generateWords = () => {
    return new Array(WORDS_COUNT).fill(null).map(() => randomWords());
  };

  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <div className="max-w-6xl space-y-8">
        <Timer startTimer={startTimer} />
        <div className="text-2xl">
          {words.map((word, index) => (
            <Fragment key={index}>
              <span>{word}</span>{" "}
            </Fragment>
          ))}
        </div>
        <input
          type="text"
          autoFocus
          spellCheck={false}
          className="input input-lg w-full input-bordered text-2xl"
        />
        <button
          onClick={() => setStartTimer(true)}
          disabled={startTimer}
          className="btn btn-primary w-full"
        >
          start
        </button>
      </div>
    </div>
  );
};

export default Editor;
