import { Dialog, DialogContent, useId } from "@salt-ds/core";
import styles from "./VictoryBoard.module.css";
import victory from "../../assets/victory.svg";
import firstRibbon from "../../icons/first-ribbon.svg";
import secondRibbon from "../../icons/second-ribbon.svg";
import thirdRibbon from "../../icons/third-ribbon.svg";
import { CloseIcon } from "@salt-ds/icons";

const VictoryBoard = (props) => {
  return (
    <Dialog
      open={props.open}
      onOpenChange={props.onOpenChange}
      id={useId()}
      className={styles.dialog}
    >
      <CloseIcon onClick={props.handleClose} />
      <DialogContent className={styles.dialogContent}>
        <div className={styles.container}>
          <div>
            <h1>Winners</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur enim nec dictum lacinia. Sed sit amet tincidunt
              turpis, quis semper quam.{" "}
            </p>
            <ul>
              <li>
                <img src={firstRibbon} alt="" /> Team Lorem ipsum 1
              </li>

              <li>
                <img src={secondRibbon} alt="" />
                Team Lorem ipsum 2
              </li>

              <li>
                <img src={thirdRibbon} alt="" />
                Team Lorem ipsum 3
              </li>
            </ul>
          </div>
          <div>
            <img
              src={victory}
              alt="People celebrating victory"
              className={styles.heroImg}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VictoryBoard;
