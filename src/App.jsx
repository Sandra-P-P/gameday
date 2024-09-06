import { Button } from "@salt-ds/core";
import VictoryBoard from "./components/VictoryBoard/VictoryBoard";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
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
    <>
      <div className={styles.App}>
        <h1>Heading</h1>
        <Button variant="cta" onClick={handleRequestOpen}>
          {" "}
          Click me
        </Button>
        <VictoryBoard
          open={open}
          onOpenChange={onOpenChange}
          handleClose={handleClose}
        ></VictoryBoard>
      </div>
    </>
  );
}

export default App;
