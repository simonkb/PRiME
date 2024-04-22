import React from "react";
import Layout from "./layout";
import styles from "./home.module.css";
import { useRouter } from "next/router";
import WithAuthProtection from "../config/withAuthProtection";
import { auth } from "../config/firebaseConfig";

const Home = () => {
  const router = useRouter();
  const goTolevel = (level) => {
    router.push(level);
  };

  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Welcome to PRiME</h1>
            <p className={styles.heroDescription}>
              Policy, Risk and Incident Management Education
            </p>
            <p className={styles.heroDescription}>
              Embark on an interactive journey to learn about cybersecurity and
              protect yourself from online threats.
            </p>
            <button
              className={styles.heroButton}
              onClick={() => goTolevel("/levels")}
            >
              Start Learning
            </button>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              src="/homebackground4.webp"
              alt="Hero"
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <img
                src="/policy.jpeg"
                alt="Policy Awareness"
                className={styles.featureIcon}
              />
              <h3 className={styles.featureTitle}>Policy Awareness</h3>
              <p className={styles.featureDescription}>
                Learn the importance of your company polices through engaging
                and immersive levels.
              </p>
            </div>
            <div className={styles.featureCard}>
              <img
                src="/risk.png"
                alt="Risk Mitigation"
                className={styles.featureIcon}
              />
              <h3 className={styles.featureTitle}>Risk Mitigation</h3>
              <p className={styles.featureDescription}>
                Enhance your intelect to mitigate cybersecurity risks through
                interactive simulation.
              </p>
            </div>
            <div className={styles.featureCard}>
              <img
                src="/incident.png"
                alt="Feature 1"
                className={styles.featureIcon}
              />
              <h3 className={styles.featureTitle}>Incident Mangement</h3>
              <p className={styles.featureDescription}>
                Elevate your instincs to respond to any cybersecurity incidents
                immediately.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.mostPlayedSection}>
          <h2 className={styles.sectionTitle}>Most Played Levels</h2>
          <div className={styles.levelGrid}>
            <div className={styles.levelCard}>
              <img
                src="/phishing.jpeg"
                alt="phishing"
                className={styles.levelThumbnail}
              />
              <div className={styles.levelInfo}>
                <h3 className={styles.levelTitle}>The Phishing Menace</h3>
                <p className={styles.levelDescription}>
                  In this challenge, you will face a flood of emails. Some are
                  harmless, while others contain phishing attempts. The goal is
                  to actively make decisions to identify and avoid clicking on
                  malicious links while considering the your company&apos;s
                  cybersecurity policies.
                </p>
                <button
                  className={styles.levelButton}
                  onClick={() => goTolevel("/levels/the-phishing-menace")}
                >
                  Play Now
                </button>
              </div>
            </div>
            <div className={styles.levelCard}>
              <img
                src="/Ransomware.jpeg"
                alt="ransomware"
                className={styles.levelThumbnail}
              />
              <div className={styles.levelInfo}>
                <h3 className={styles.levelTitle}>Ransomware</h3>
                <p className={styles.levelDescription}>
                  This level immerses users in a realistic ransomware attack
                  scenario to teach the critical steps of identifying,
                  containing, and mitigating such threats. Users will navigate
                  through stages simulating a ransomware infiltration, learning
                  to manage the crisis by disconnecting affected devices,
                  identifying malware characteristics, and restoring systems
                  safely.
                </p>
                <button
                  className={styles.levelButton}
                  onClick={() => goTolevel("/levels/ransomware")}
                >
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.riskDetectionSection}>
          <h2 className={styles.sectionTitle}>Live Risk Detection</h2>
          <p className={styles.riskDetectionDescription}>
            Experience real-time risk detection and learn how to mitigate
            potential threats.
          </p>
          <button
            className={styles.riskDetectionButton}
            onClick={()=>{
              router.push("http://127.0.0.1:5000")
            }}
          >
            Go to Live Risk Detection
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default WithAuthProtection(Home);
