import { PlaySolidIcon } from "@salt-ds/icons";
import Clock from "../Clock/Clock";
import styles from "./Timer.module.css";

const Timer = () => {
  return (
    <div className={`${styles.container} timer`}>
      <div>
        <h2>Event Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur enim nec dictum lacinia. Sed sit amet tincidunt turpis,
          quis semper quam.{" "}
        </p>
        <button>
          Start Event <PlaySolidIcon size={0.5} />
        </button>
      </div>
      <Clock />
    </div>
  );
};

export default Timer;
