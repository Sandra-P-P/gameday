import { ClockIcon } from "@salt-ds/icons";
import styles from "./Clock.module.css";
import { useEffect, useState } from "react";

function formatTime(time) {
  return time.toString().padStart(2, 0);
}

const Clock = ({ stopwatchState }) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  let clockStatus = "Timer Stopped";
  if (stopwatchState === "START") {
    clockStatus = "Timer Started";
  }
  if (stopwatchState === "PAUSE") {
    clockStatus = "Timer Paused";
  }
  useEffect(() => {
    let intervalId;
    if (stopwatchState === "START") {
      let { hours, minutes, seconds } = time;
      intervalId = setInterval(() => {
        const newSeconds = ++seconds;
        const newMinutes = minutes + Math.floor(newSeconds / 60);
        const newHours = hours + Math.floor(newMinutes / 60);
        setTime({
          hours: newHours % 60,
          minutes: newMinutes % 60,
          seconds: newSeconds % 60,
        });
      }, 1000);
    }
    if (stopwatchState === "STOP") {
      setTime({ hours: 0, minutes: 0, seconds: 0 });
    }
    return () => clearInterval(intervalId);
  }, [time, stopwatchState]);
  return (
    <div
      className={`${styles.container} ${stopwatchState === "START" ? styles.active : ""}`}
    >
      <div className={styles.spock}>
        <svg
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            stroke="#9581E5"
            strokeWidth="7"
            strokeDasharray="1 12"
          />
        </svg>
      </div>
      <div className={styles.startWheel}>
        <span></span>
      </div>
      <div className={styles.clockInfo}>
        <span className={styles.clockStatus}>
          <ClockIcon />
          {clockStatus}
        </span>
        <div className={styles.clockTime}>
          <div>
            <span>{formatTime(time.hours)}:</span>
            <span>Hours</span>
          </div>
          <div>
            <span>{formatTime(time.minutes)}:</span>
            <span>Minutes</span>
          </div>
          <div>
            <span>{formatTime(time.seconds)}</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
