import React, { useState } from "react";
import Layout from "./layout";
import styles from "./help.module.css";
const faqs = [
  {
    id: 1,
    question: "What is your cancelation policy?",
    answer: "You can cancel subscription within 30 days for a full refund.",
  },
  {
    id: 2,
    question:
      "What is the primary goal of your educational cyber awareness game?",
    answer:
      "Our game is designed to enhance cybersecurity awareness among company employees in an engaging and interactive manner. It aims to equip players with the knowledge and skills needed to identify, prevent, and respond to various cyber threats, ensuring a safer digital work environment.",
  },
  {
    id: 3,
    question: "Who should play this game?",
    answer:
      "The game is suitable for employees at all levels within an organization, from new hires to senior executives. It's tailored to benefit anyone who uses digital tools and services in their work, offering valuable insights into cybersecurity best practices and threat prevention.",
  },
  {
    id: 4,
    question: "How is the game structured?",
    answer:
      "Our game is structured into various levels, each focusing on different aspects of cybersecurity, such as phishing, password security, data protection, and network security. Players progress through levels by completing challenges and quizzes, gaining points, and unlocking advanced content that dives deeper into complex cybersecurity topics.",
  },
  {
    id: 5,
    question: "What skills can players expect to learn?",
    answer:
      "Players will learn to identify phishing attempts, create strong passwords, recognize secure websites, understand the importance of software updates, and apply best practices for data protection. The game also covers how to respond to a data breach and emphasizes the significance of a proactive cybersecurity posture.",
  },
];

const Help = () => {
  const [openFAQId, setOpenFAQId] = useState(null);

  const toggleFAQ = (id) => {
    if (openFAQId === id) {
      setOpenFAQId(null); // Close this FAQ if it's already open
    } else {
      setOpenFAQId(id); // Open the clicked FAQ
    }
  };
  return (
    <Layout>
      <div className={styles.helpContainer}>
        <h1 className={styles.heading}>Help & Support</h1>

        <section className={styles.helpSection}>
          <h2>FAQs</h2>
          <p>
            Find answers to commonly asked questions and get the help you need.
          </p>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
                <span className={styles.faqToggle}>
                  {openFAQId === faq.id ? "▲" : "▼"}
                </span>
              </div>
              {openFAQId === faq.id && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </section>

        <section className={styles.helpSection}>
          <h2>Contact Us</h2>
          <p>Need more help? Reach out to our support team for assistance.</p>
          <p>Team Leader : Winner A. </p>
          <p> Email: 201950320@uaeu.ac.ae</p>
          <p>Team Member : Yousef F. </p>
          <p> Email: 202051136@uaeu.ac.ae</p>
          <p>Team Member : Yousef H. </p>
          <p> Email: 202051136@uaeu.ac.ae</p>
          <p>Team Member : Simon D. </p>
          <p> Email: 201950317@uaeu.ac.ae</p>
        </section>

        <section
          id="3"
          className={styles.helpSection}
          style={{ position: "relative" }}
        >
          <h2>Talk to our virtual assistant</h2>
          <p>
            Our virtual assistant is here to help you 24/7 with any questions
            you may have.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Help;
