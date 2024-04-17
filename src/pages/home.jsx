import React from "react";
import Layout from "./layout";
import styles from './home.module.css'; 
import { useRouter } from "next/router";
import WithAuthProtection from "../../config/withAuthProtection";

const Home = () => {
  const router = useRouter();
  const goTolevel = (level) => {
    router.push(level);
  };
  return (
    <Layout>
      <div className={styles.homeContainer} style={{ backgroundImage: `url('/homebackground4.webp')` }}>
        <div className={styles.userProfileContainer}>
          <img src="/Unknown_person.jpg" alt="User Avatar" className={styles.avatar} />
          <div className={styles.userInfo}>
          <h2 className={styles.username}>Yousef</h2>
          <p className={styles.score}>Score: 2500</p>
        </div>
        </div>

        <div className={styles.navigation}>
          <button className={styles.navButton} onClick={() => {goTolevel("/levels")}}>
            Play
          </button>
          <button className={styles.navButton} onClick={() => {goTolevel("/settings")}}>
            Settings
          </button>
          <button className={styles.navButton} onClick={() => {goTolevel("/profile")}}>
            Profile
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default WithAuthProtection(Home);