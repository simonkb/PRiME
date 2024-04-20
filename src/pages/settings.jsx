import React, { useState } from "react";
import Layout from "./layout"; // Make sure the path is correct
import styles from "./settings.module.css";
import WithAuthProtection from "../../config/withAuthProtection";

const Settings = () => {
  // Example state hooks for settings
  const [soundVolume, setSoundVolume] = useState(50);
  const [musicVolume, setMusicVolume] = useState(50);
  const [gameDifficulty, setGameDifficulty] = useState("Normal");
  const [displayMode, setDisplayMode] = useState("Light");

  return (
    <Layout>
      <div className={styles.settingsContainer}>
        <h1 className={styles.settingsHeader}>Settings</h1>

        <div className={styles.setting}>
          <label>Sound Volume: {soundVolume}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={soundVolume}
            onChange={(e) => setSoundVolume(e.target.value)}
            className={styles.slider}
          />
        </div>

        <div className={styles.setting}>
          <label>Music Volume: {musicVolume}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={musicVolume}
            onChange={(e) => setMusicVolume(e.target.value)}
            className={styles.slider}
          />
        </div>

        <div className={styles.setting}>
          <label>Game Difficulty:</label>
          <select
            value={gameDifficulty}
            onChange={(e) => setGameDifficulty(e.target.value)}
            className={styles.dropdown}
          >
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className={styles.setting}>
          <label>Display Mode:</label>
          <select
            value={displayMode}
            onChange={(e) => setDisplayMode(e.target.value)}
            className={styles.dropdown}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
      </div>
    </Layout>
  );
};

export default WithAuthProtection(Settings);
