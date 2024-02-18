import VirtualAssistant from "../../components/virtualAssistant";
import Layout from "../layout";
import styles from "./Phishing.module.css";
import { useState, useRef, useEffect } from "react";

const Phishing = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: "John Doe",
      subject: "Important Announcement",
      content:
        "Dear User, please click the link below for an important announcement.",
      link: "https://example.com/important-announcement",
      attachment: "report.pdf",
    },
    {
      id: 2,
      sender: "Jane Smith",
      subject: "Invoice Payment",
      content:
        "Hello, your recent invoice is ready for payment. Please find the attached invoice.",
      attachment: "invoice.pdf",
    },
    {
      id: 3,
      sender: "Customer Support",
      subject: "Account Verification",
      content:
        "Dear User, we noticed some unusual activity on your account. Click the link to verify your account.",
      link: "https://example.com/verify-account",
    },
    {
      id: 4,
      sender: "Bank XYZ",
      subject: "Security Alert",
      content:
        "Your account security has been compromised. Click the link to secure your account.",
      link: "https://example.com/secure-account",
    },
    {
      id: 5,
      sender: "Amazon",
      subject: "Order Confirmation",
      content:
        "Your recent order has been confirmed. If you didn't place this order, click the link to report.",
      link: "https://example.com/report-order",
    },
    // Scam Emails
    {
      id: 6,
      sender: "Prize Notification",
      subject: "You've Won a Prize!",
      content:
        "Congratulations! You've won a prize. To claim, provide your personal information.",
      link: "https://example.com/claim-prize",
    },
    {
      id: 7,
      sender: "Lottery Winner",
      subject: "You're the Lucky Winner!",
      content:
        "You've won a lottery. To receive your winnings, send a processing fee.",
    },
    {
      id: 8,
      sender: "Tech Support",
      subject: "Virus Detected",
      content:
        "Your computer has a virus. Call this number to get immediate support.",
    },
    {
      id: 9,
      sender: "Pharmacy Discounts",
      subject: "Special Offer on Medications",
      content:
        "Get exclusive discounts on medications. Click the link to order.",
      link: "https://example.com/order-meds",
    },
    {
      id: 10,
      sender: "IRS Alert",
      subject: "Tax Refund Pending",
      content:
        "Your tax refund is pending. Click the link to provide bank details for processing.",
      link: "https://example.com/provide-details",
    },
  ]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleActionClick = (action, emailId) => {
    // Handle the click actions here
    console.log(`Clicked ${action} for email with ID ${emailId}`);
    handleButtonClick(action + emailId + ". ");
  };
  const virtualAssistantRef = useRef();

  const handleButtonClick = (message) => {
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

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.emailListContainer}>
          <h1>Email Inbox</h1>
          <div className={styles.emailList}>
            {emails.map((email) => (
              <div
                key={email.id}
                className={`${styles.email} ${
                  selectedEmail?.id === email.id ? styles.selected : ""
                }`}
                onClick={() => handleEmailClick(email)}
              >
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
                <div className={styles.sender}>
                  {selectedEmail.sender} &lt;{"johne@example.com"}&gt;
                </div>
              </div>
              <div className={styles.subject2}>
                Subject: {selectedEmail.subject}
              </div>
              <div className={styles.emailContent}>{selectedEmail.content}</div>
              <div className={styles.actions}>
                <button
                  className={styles.button}
                  onClick={() =>
                    handleActionClick("Report Spam", selectedEmail.id)
                  }
                >
                  Report Spam
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleActionClick("Reply", selectedEmail.id)}
                >
                  Reply
                </button>
                <button
                  className={styles.button}
                  onClick={() =>
                    handleActionClick("Open Link", selectedEmail.id)
                  }
                >
                  Open Link
                </button>
                {selectedEmail.attachment && (
                  <button
                    className={styles.button}
                    onClick={() =>
                      handleActionClick("Download Attachment", selectedEmail.id)
                    }
                  >
                    Download Attachment
                  </button>
                )}
                <button
                  className={styles.button}
                  onClick={() =>
                    handleActionClick("Unsubscribe", selectedEmail.id)
                  }
                >
                  Unsubscribe
                </button>
                <button
                  className={styles.button}
                  onClick={() =>
                    handleActionClick("Report to Police", selectedEmail.id)
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
        <VirtualAssistant ref={virtualAssistantRef} />
      </div>
    </Layout>
  );
};

export default Phishing;
