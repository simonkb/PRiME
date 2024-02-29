import VirtualAssistant from "../../components/virtualAssistant";
import Layout from "../layout";
import styles from "./Phishing.module.css";
import { useState, useRef, useEffect } from "react";
const Phishing = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: "John Doe <john.doe@example.com>",
      senderEmailAddress: "john.doe@example.com",
      subject: "Important Announcement",
      heading: "Urgent Notice Regarding Your Account",
      body: "Dear User, \n\nWe regret to inform you that there is an urgent matter regarding your account that requires your immediate attention. Our system detected suspicious activity, and we need you to verify your account details. Click the link below to access your account and resolve this matter promptly:\n",
      link: "https://example.com/important-announcement",
      closing:
        "\n\nFailure to verify your account may result in temporary suspension. Thank you for your cooperation. \n\nSincerely, \nJohn Doe",
      attachment: "report.pdf",
      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 2,
      sender: "Jane Smith <jane.smith@example.com>",
      senderEmailAddress: "jane.smith@example.com",
      subject: "Invoice Payment",
      heading: "Invoice Payment Due - Immediate Action Required",
      body: "Hello,\n\nWe hope this message finds you well. Your recent invoice is now ready for payment. The total amount due is $250. If the payment is not received within the next 24 hours, a late fee of $50 will be applied. To ensure uninterrupted services, please make the payment at your earliest convenience.\n",
      closing:
        "\n\nThank you for your prompt attention to this matter. \n\nBest regards, \nJane Smith",
      attachment: "invoice.pdf",
      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 3,
      sender: "Customer Support <support@example.com>",
      senderEmailAddress: "support@example.com",
      subject: "Account Verification",
      heading: "Immediate Action Required: Verify Your Account",
      body: "Dear User,\n\nOur security system has detected multiple login attempts from different locations. To secure your account, we require you to verify your identity. Please click on the link below to initiate the verification process:\n",
      link: "https://example.com/verify-account",
      closing:
        "\n\nThank you for your cooperation in maintaining a secure environment for all our users. \n\nBest Regards, \nCustomer Support",
      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 4,
      sender: "Bank XYZ <security@bankxyz.com>",
      senderEmailAddress: "security@bankxyz.com",
      subject: "Security Alert",
      heading: "Urgent: Security Breach Detected",
      body: "Dear Valued Customer,\n\nWe regret to inform you that our security system has detected unauthorized access to your account. To ensure the safety of your funds and personal information, we urge you to take immediate action. Click on the link below to review your recent transactions and secure your account:\n",
      link: "https://example.com/secure-account",
      closing:
        "\n\nYour prompt response is crucial in preventing any further unauthorized access. Thank you for your cooperation. \n\nSincerely, \nBank XYZ Security Team",
      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 5,
      sender: "Amazon <noreply@amazon.com>",
      senderEmailAddress: "noreply@amazon.com",
      subject: "Order Confirmation",
      heading: "Your Amazon Order Confirmation",
      body: "Dear Customer,\n\nWe're excited to confirm your recent order. If you did not place this order, please click the link below to report it immediately:\n",
      link: "https://example.com/report-order",
      closing:
        "\n\nThank you for choosing Amazon. We appreciate your business. \n\nBest regards, \nAmazon Customer Service",

      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 6,
      sender: "Prize Notification <prizes@winners.com>",
      senderEmailAddress: "prizes@winners.com",
      subject: "You've Won a Prize!",
      heading: "Congratulations! You're a Lucky Winner",
      body: "Dear Winner,\n\nCongratulations! You have been selected as the lucky winner of our exclusive prize. To claim your prize, please provide your personal information by clicking on the link below:\n",
      link: "https://example.com/claim-prize",
      closing:
        "\n\nThis is a limited-time offer, and your immediate response is required. Thank you for participating. \n\nBest Wishes, \nPrize Notification Team",

      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 7,
      sender: "Lottery Winner <claim@luckywin.com>",
      senderEmailAddress: "claim@luckywin.com",
      subject: "You're the Lucky Winner!",
      heading: "Congratulations! You're Our Lottery Winner",
      body: "Dear Lucky Winner,\n\nWe are thrilled to inform you that you have been chosen as the lucky winner of our grand lottery. To claim your winnings, please follow the instructions provided in the link below:\n",
      link: "https://example.com/claim-lottery",
      closing:
        "\n\nThis is a once-in-a-lifetime opportunity, and your prompt response is highly recommended. Thank you for being part of our lottery. \n\nBest Regards, \nLottery Winner Team",
      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 8,
      sender: "Tech Support <support@yourtech.com>",
      senderEmailAddress: "support@yourtech.com",
      subject: "Virus Detected",
      heading: "Urgent: Your Computer is Infected!",
      body: "Dear User,\n\nOur system has detected a serious virus on your computer. Immediate action is required to prevent data loss and system damage. Please call our technical support team at the number provided below for immediate assistance:\n",
      link: "tel:+123456789",
      closing:
        "\n\nIgnoring this alert may result in permanent data loss. We are here to help you resolve this issue. \n\nSincerely, \nTech Support Team",
      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 9,
      sender: "Pharmacy Discounts <offers@meddiscounts.com>",
      senderEmailAddress: "offers@meddiscounts.com",
      subject: "Special Offer on Medications",
      heading: "Exclusive Pharmacy Discounts Await You",
      body: "Dear Customer,\n\nUnlock exclusive discounts on a wide range of medications. Take advantage of this special offer by clicking the link below:\n",
      link: "https://example.com/discounted-meds",
      closing:
        "\n\nThis offer is valid for a limited time only. Start saving on your medications today. \n\nBest Regards, \nPharmacy Discounts Team",
      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
    {
      id: 10,
      sender: "IRS Alert <irs@taxauthority.com>",
      senderEmailAddress: "irs@taxauthority.com",
      subject: "Tax Refund Pending",
      heading: "Important: Your Tax Refund is Pending",
      body: "Dear Taxpayer,\n\nYour tax refund is pending approval. To expedite the process, please provide the necessary bank details by clicking on the link below:\n",
      link: "https://example.com/provide-bank-details",
      closing:
        "\n\nFailure to provide the required information may delay your refund. We appreciate your cooperation. \n\nSincerely, \nIRS Alert Team",
      pointsEarned: 0,
      pointsPossible: 50,
      actions: {
        read: 5,
        linkClick: -10,
        downloadAttachment: -5,
        reportSpam: 20,
        reply: 0,
        unsubscribe: 5,
        reportToPolice: 20,
      },
    },
  ]);

  const [selectedEmail, setSelectedEmail] = useState(emails[0]);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    const updatedEmails = [...emails];

    updatedEmails[selectedEmail.id - 1].pointsEarned +=
      updatedEmails[selectedEmail.id - 1].actions.read;
    // Update state
    setEmails(updatedEmails);
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

export default Phishing;
