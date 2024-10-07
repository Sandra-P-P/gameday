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
          <div className="events">
            <h2>Events</h2>
          </div>
          <Timer />
          <div className="teams">
            <h2>Teams</h2>
          </div>
          <div className="scorecard">
            <h2>Scorecard</h2>
          </div>
          <Leadership />
        </div>
      </div>
    </>
  );
}

export default App;
