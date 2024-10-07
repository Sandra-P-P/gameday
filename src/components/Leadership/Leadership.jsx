import { useState } from "react";
import VictoryBoard from "../VictoryBoard/VictoryBoard";
import styles from "./Leadership.module.css";
import { PlaySolidIcon } from "@salt-ds/icons";

const Leadership = () => {
  const [open, setOpen] = useState(false);
  const handleRequestOpen = () => {
    setOpen(true);
  };

  const onOpenChange = (value) => {
    setOpen(value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="leadership">
      <h2 className={styles.heading}>Leadership</h2>
      <button
        onClick={handleRequestOpen}
        className={`${styles.resultsBtn} custom-btn`}
      >
        Final Results <PlaySolidIcon />
      </button>
      <VictoryBoard
        open={open}
        onOpenChange={onOpenChange}
        handleClose={handleClose}
      ></VictoryBoard>
    </div>
  );
};

export default Leadership;
