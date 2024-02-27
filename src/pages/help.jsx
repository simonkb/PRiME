// help.jsx
import React from "react";
import Layout from "./layout"; // Import the Layout component
import styles from "./help.module.css";

const Help = () => {
  return (
    <Layout>
      <div className={styles.helpContainer}>
        <h1 className={styles.heading}>Help & Support</h1>

        <section className={styles.helpSection}>
          <h2>FAQs</h2>
          <p>
            Find answers to commonly asked questions and get the help you need.
          </p>
        </section>

        <section className={styles.helpSection}>
          <h2>Contact Us</h2>
          <p>
            Need more help? Reach out to our support team for assistance.
          </p>
        </section>

        <section className={styles.helpSection}>
          <h2>Talk to our virtual assistant</h2>
          <p>
            Our virtual assistant is here to help you 24/7 with any questions you may have.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Help;
