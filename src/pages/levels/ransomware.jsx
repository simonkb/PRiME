import React, { useState } from "react";
import Layout from "../layout";
import styles from "./ransomware.module.css";
import { useRouter } from "next/router";
import WithAuthProtection from "../../../config/withAuthProtection";

const RansomwareLevel = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const finishTutorial = () => {
    router.push("/levels");
  };

  return (
    <Layout>
      <div className={styles.container}>
        {currentStep === 1 && (
          <div className={styles.intro}>
            <img
              src="/ransomware2.jpeg"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h1>Welcome to the Ransomware Crisis Tutorial</h1>
            <p>
              This interactive tutorial simulates a ransomware attack on your
              system to teach you the critical steps of handling such a crisis.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Start Tutorial
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className={styles.attackSimulation}>
            <img
              src="/step1-ransomware.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>Email Alert</h2>
            <p>
              You&apos;ve received an urgent email from what seems like a trusted
              source asking you to review an attached document.
            </p>
            <p>
              Proceed to open the attachment as this is a simulated training
              exercise.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Open the Attachment
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className={styles.identification}>
            <img
              src="/step2-ransomware.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>Immediate Threat Alert</h2>
            <p>
              The attachment you opened has executed a script that is now
              encrypting your files.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Understand the Threat
            </button>
          </div>
        )}

        {currentStep === 4 && (
          <div className={styles.containment}>
            <img
              src="/step3-ransomware.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>Network Containment</h2>
            <p>
              First, disconnect your computer from the internet to prevent the
              malware from communicating with its command and control center.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Disconnect from Network
            </button>
          </div>
        )}

        {currentStep === 5 && (
          <div className={styles.containment}>
            <img
              src="/step4-ransomware.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>Isolate Affected System</h2>
            <p>
              Shut down your computer to stop further encryption. Use another
              device to search for a resolution.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Shutdown Computer
            </button>
          </div>
        )}

        {currentStep === 6 && (
          <div className={styles.mitigation}>
            <img
              src="/step5-ran.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>Identify Malware</h2>
            <p>
              Use a secure device to look up the ransomware&apos;s characteristics
              based on the ransom note and file extensions changed.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Research Malware
            </button>
          </div>
        )}

        {currentStep === 7 && (
          <div className={styles.mitigation}>
            <img
              src="/step6-ransomware.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>Engage Cybersecurity Professionals</h2>
            <p>
              Contact cybersecurity professionals for help in removing the
              ransomware and restoring your systems.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Contact Experts
            </button>
          </div>
        )}

        {currentStep === 8 && (
          <div className={styles.recovery}>
            <img
              src="/step5-ransomware.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>System Recovery and File Restoration</h2>
            <p>
              Once the malware is removed, restore your files from backup if
              available, or follow professional advice to decrypt the files.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Restore Files
            </button>
          </div>
        )}

        {currentStep === 9 && (
          <div className={styles.prevention}>
            <img
              src="/step7-ransomware.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>Preventive Measures</h2>
            <p>
              Learn and implement measures to prevent future ransomware attacks,
              including regular updates, user training, and robust backup
              strategies.
            </p>
            <button onClick={handleNextStep} className={styles.button}>
              Learn Prevention
            </button>
          </div>
        )}

        {currentStep === 10 && (
          <div className={styles.completion}>
            <img
              src="/step8-ransomware.webp"
              alt="Ransomware Tutorial"
              className={styles.Image}
            />
            <h2>Tutorial Completed</h2>
            <p>
              Congratulations! You have completed the ransomware crisis tutorial
              and are now prepared to handle real-world attacks more
              effectively.
            </p>
            <button onClick={finishTutorial} className={styles.Fbutton}>
              Back to Levels
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WithAuthProtection(RansomwareLevel);
