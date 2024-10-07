import {
  PauseSolidIcon,
  PlaySolidIcon,
  ProgressRejectedIcon,
} from "@salt-ds/icons";
import Clock from "../Clock/Clock";
import styles from "./Timer.module.css";
import { useState } from "react";

const Timer = () => {
  const [stopwatchState, setStopwatchState] = useState("STOP");
  let eventState = styles.eventStop;
  if (stopwatchState === "START" || stopwatchState === "PAUSE")
    eventState = styles.eventStart;
  return (
    <div className={`${styles.container} timer ${eventState}`}>
      <div>
        <h2>Event Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur enim nec dictum lacinia. Sed sit amet tincidunt turpis,
          quis semper quam.{" "}
        </p>
        <div>
          {stopwatchState === "START" || stopwatchState === "PAUSE" ? (
            <>
              <button
                onClick={() => {
                  setStopwatchState(
                    stopwatchState !== "STOP" ? "STOP" : "START",
                  );
                }}
              >
                Stop Event <ProgressRejectedIcon size={0.5} />
              </button>
              <button
                onClick={() => {
                  setStopwatchState(
                    stopwatchState === "START" ? "PAUSE" : "START",
                  );
                }}
              >
                {stopwatchState === "PAUSE" ? "Resume" : "Pause"}
                {stopwatchState === "PAUSE" ? (
                  <PlaySolidIcon size={0.5} />
                ) : (
                  <PauseSolidIcon size={0.5} />
                )}
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setStopwatchState(stopwatchState !== "STOP" ? "STOP" : "START");
              }}
            >
              Start Event <PlaySolidIcon size={0.5} />
            </button>
          )}
        </div>
      </div>
      <Clock stopwatchState={stopwatchState} />
    </div>
  );
};

export default Timer;
