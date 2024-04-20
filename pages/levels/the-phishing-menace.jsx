import Layout from "../layout";
import styles from "./Phishing.module.css";
import { useState, useRef, useEffect } from "react";
import WithAuthProtection from "../../config/withAuthProtection";
import { auth, db } from "../../config/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import VirtualAssistant from "../../src/components/vAssistant";
import { Howl } from "howler";
import { CSSTransition } from "react-transition-group";
import PointsDisplay from "../../src/components/pointsDisplay";
const Phishing = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(emails[0]);
  const [content, setContent] = useState({
    level: "The phishing menace",
    type: "Question from the user.",
    email: selectedEmail,
    userQuestion: "",
    userAction: "none",
  });
  const [positiveSound, setPositiveSound] = useState(null);
  const [negativeSound, setNegativeSound] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState("");
  const [pointsEarned, setPointsEarned] = useState(0);
  const [pointsLost, setPointsLost] = useState(0);
  useEffect(() => {
    const positiveSound = new Howl({
      src: ["/positive-sound.mp3"],
    });
    setPositiveSound(positiveSound);

    const negativeSound = new Howl({
      src: ["/negative-sound.mp3"],
    });
    setNegativeSound(negativeSound);

    return () => {
      positiveSound.unload();
      negativeSound.unload();
    };
  }, []);

  useEffect(() => {
    if (selectedEmail) {
      const updatedEmails = [...emails];
      updatedEmails[selectedEmail.id - 1].pointsEarned +=
        updatedEmails[selectedEmail.id - 1].actions.read;
      setEmails(updatedEmails);
    }
  }, [selectedEmail]);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };
  const handleActionClick = (action, email) => {
    const updatedEmails = [...emails];
    const emailIndex = selectedEmail.id - 1;
    const pointChange = updatedEmails[emailIndex].actions[action];

    if (pointChange > 0) {
      positiveSound.play();
      setPointsEarned(pointChange);
      setAnimationType("positive");
    } else {
      negativeSound.play();
      setPointsLost(-pointChange);
      setAnimationType("negative");
    }

    setShowAnimation(true);

    updatedEmails[emailIndex].pointsEarned += pointChange;
    setEmails(updatedEmails);

    setTimeout(() => {
      setShowAnimation(false);
      setPointsEarned(0);
      setPointsLost(0);
    }, 1000);
  };
  const handleButtonClick = (message) => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docSnap = await getDoc(doc(db, "Levels", "the-phishing-menace"));
        if (docSnap.exists()) {
          setEmails(docSnap.data().emails);
        }
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);
  return (
    <Layout>
      <div className={styles.containerOuter}>
        <div className={styles.title}>
          <h3>The Phishing Menace</h3>
        </div>
        <PointsDisplay
          points={emails.reduce(
            (total, email) => total + email.pointsEarned,
            0
          )}
        />

        <div className={styles.container}>
          <div className={styles.emailListContainer}>
            <h4>Inbox</h4>
            <div className={styles.emailList}>
              {emails.map((email) => (
                <div
                  key={email.id}
                  className={`${styles.email} ${
                    selectedEmail?.id === email.id ? styles.selected : ""
                  }`}
                  onClick={() => handleEmailClick(email)}
                >
                  <CSSTransition
                    in={showAnimation && selectedEmail?.id === email.id}
                    timeout={1000}
                    classNames={{
                      enter: styles[`badgeAnimation-enter-${animationType}`],
                      enterActive:
                        styles[`badgeAnimation-enter-active-${animationType}`],
                      exit: styles[`badgeAnimation-exit-${animationType}`],
                      exitActive:
                        styles[`badgeAnimation-exit-active-${animationType}`],
                    }}
                    unmountOnExit
                  >
                    <div className={styles.badge}>
                      {`${email.pointsEarned} / ${email.pointsPossible}`}
                      {animationType === "positive" && (
                        <div className={styles.animationContainer}>
                          <span className={styles.animationIcon}>
                            &#128513;
                          </span>
                          <span className={styles.animationPoints}>
                            +{pointsEarned}
                          </span>
                        </div>
                      )}
                      {animationType === "negative" && (
                        <div className={styles.animationContainer}>
                          <span className={styles.animationIcon}>
                            &#128546;
                          </span>
                          <span className={styles.animationPoints}>
                            -{pointsLost}
                          </span>
                        </div>
                      )}
                    </div>
                  </CSSTransition>
                  <div className={styles.sender1}>{email.sender}</div>
                  <div className={styles.subject}>{email.subject}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.emailDetailsContainer}>
            {selectedEmail ? (
              <div className={styles.emailDetails}>
                <div className={styles.emailHeader}>
                  <div className={styles.sender}>{selectedEmail.sender}</div>
                </div>
                <div className={styles.subject2}>
                  Subject: {selectedEmail.subject}
                </div>
                <div className={styles.emailContent}>{selectedEmail.body}</div>
                {selectedEmail.link && (
                  <a
                    href="#"
                    onClick={() =>
                      handleActionClick("linkClick", selectedEmail)
                    }
                  >
                    Link
                  </a>
                )}
                <div className={styles.emailContent}>
                  {selectedEmail.closing}
                </div>
                <br></br>
                {selectedEmail.attachment && (
                  <div
                    className={styles.attachFileContainer}
                    onClick={() =>
                      handleActionClick("downloadAttachment", selectedEmail)
                    }
                  >
                    <div className={styles.fileIcon}>📎</div>
                    <div className={styles.fileName}>
                      {selectedEmail.attachment}
                    </div>
                  </div>
                )}
                <div className={styles.actions}>
                  <button
                    className={styles.button}
                    onClick={() =>
                      handleActionClick("reportSpam", selectedEmail)
                    }
                  >
                    Report Spam
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => handleActionClick("reply", selectedEmail)}
                  >
                    Reply
                  </button>
                  <button
                    className={styles.button}
                    onClick={() =>
                      handleActionClick("unsubscribe", selectedEmail)
                    }
                  >
                    Unsubscribe
                  </button>
                  <button
                    className={styles.button}
                    onClick={() =>
                      handleActionClick("reportToPolice", selectedEmail)
                    }
                  >
                    Report to Police
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.placeholderText}>
                Select an email to view details and take actions.
              </div>
            )}
          </div>
        </div>
        <VirtualAssistant content={content}></VirtualAssistant>
      </div>
    </Layout>
  );
};
export default WithAuthProtection(Phishing);
