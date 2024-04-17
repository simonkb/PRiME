import VirtualAssistant from "../../components/VirtualAssistant";
import Layout from "../layout";
import styles from "./Phishing.module.css";
import { useState, useRef, useEffect } from "react";
import WithAuthProtection from "../../../config/withAuthProtection";
import { auth, db } from "../../../config/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
const Phishing = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(emails[0]);
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
    let ob = {
      selectedEmail: email,
      instraction:
        "Based on the selected email object and its content answer the question provided in userinput",
    };
    virtualAssistantRef.current.setCurrentContent(ob);
  };

  const handleActionClick = (action, email) => {
    const updatedEmails = [...emails];
    updatedEmails[selectedEmail.id - 1].pointsEarned +=
      updatedEmails[selectedEmail.id - 1].actions[action];
    setEmails(updatedEmails);
    virtualAssistantRef.current.handleAction({
      user: "Simon",
      level: "The phishing menace",
      content: email,
      action: action,
    });
  };
  const virtualAssistantRef = useRef();

  const handleButtonClick = (message) => {
    //
    if (virtualAssistantRef.current) {
      virtualAssistantRef.current.showAssistant(
        message + "Well done. Now please proceed to the next email."
      );
    }
  };
  useEffect(() => {
    if (virtualAssistantRef.current) {
      let ob = {
        name: "Simon",
        level: "Phishing menace level",
      };
      virtualAssistantRef.current.handleWelcomeMessage(ob);
    }
  }, []);
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
                  <div className={styles.badge}>
                    {`${email.pointsEarned} / ${email.pointsPossible}`}
                  </div>
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
                      handleActionClick("link Click", selectedEmail)
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
                      handleActionClick("download attachment", selectedEmail)
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
                      handleActionClick("report Spam", selectedEmail)
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
                      handleActionClick("report To Police", selectedEmail)
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
        <VirtualAssistant ref={virtualAssistantRef} />
      </div>
    </Layout>
  );
};

export default WithAuthProtection(Phishing);
