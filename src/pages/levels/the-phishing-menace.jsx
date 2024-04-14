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
  };

  const handleActionClick = (action, emailId) => {
    // Handle the click actions here
    const updatedEmails = [...emails];

    // Update points
    updatedEmails[selectedEmail.id - 1].pointsEarned +=
      updatedEmails[selectedEmail.id - 1].actions[action];
    // Update state
    setEmails(updatedEmails);

    console.log(`Clicked ${action} for email with ID ${emailId}`);
    handleButtonClick(action + emailId + ". ");
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
      virtualAssistantRef.current.showAssistant(
        "Welcome to the phishing menace level. In this level, you are presented with multiple emails some of which are phishing emails and the rest are not. Your task is to take one or more of the possible actions for each email. Based on the goodness of your actions you will get important points and my feedbacks."
      );
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
                      handleActionClick("linkClick", selectedEmail.id)
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
                      handleActionClick("downloadAttachment", selectedEmail.id)
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
                      handleActionClick("reportSpam", selectedEmail.id)
                    }
                  >
                    Report Spam
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => handleActionClick("reply", selectedEmail.id)}
                  >
                    Reply
                  </button>
                  <button
                    className={styles.button}
                    onClick={() =>
                      handleActionClick("unsubscribe", selectedEmail.id)
                    }
                  >
                    Unsubscribe
                  </button>
                  <button
                    className={styles.button}
                    onClick={() =>
                      handleActionClick("reportToPolice", selectedEmail.id)
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
