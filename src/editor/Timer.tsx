import { useEffect, useState } from "react";
const countdownTime = (time: number = 5) => time;

const Timer: React.FC<{ startTimer: boolean }> = ({ startTimer }) => {
  const [countdown, setCountdown] = useState<number>(countdownTime());

  useEffect(() => {
    console.count("Timer Effect");
    if (!startTimer) return;
    const timer = setInterval(
      () =>
        setCountdown((prev) => {
          if (prev === 1) clearInterval(timer);
          return prev - 1;
        }),
      1000
    );
  }, [startTimer]);

  return (
    <div className="flex justify-between w-full items-center">
      <span className="text-4xl font-semibold">{`${countdown} seconds`}</span>

      <select
        name="Timer"
        defaultValue={60}
        onChange={(e) => setCountdown(+e.target.value)}
        className="select text-lg select-bordered w-full max-w-xs"
      >
        <option disabled value={60}>
          Choose time
        </option>
        <option value={60 / 2}>30 seconds</option>
        <option value={60 * 2}>2 minutes</option>
        <option value={60 * 3}>3 minutes</option>
        <option value={60 * 4}>4 minutes</option>
        <option value={60 * 5}>5 minutes</option>
        <option value={60 * 10}>10 minutes</option>
        <option value={60 * 15}>15 minutes</option>
      </select>
    </div>
  );
};

export default Timer;
