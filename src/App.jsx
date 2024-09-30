import styles from "./App.module.css";
import Leadership from "./components/Leadership/Leadership";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <header className={styles.header}>
        <strong>Amazon</strong> Gameday
      </header>
      <div className={styles.App}>
        <div className="dashboard-parent-container">
          <div className="general-info"></div>
          <div className="events"></div>
          <Timer />
          <div className="teams"></div>
          <div className="scorecard"></div>
          <Leadership />
        </div>
      </div>
    </>
  );
}

export default App;
