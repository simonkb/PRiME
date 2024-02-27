// Services.jsx
import React from "react";
import Layout from "./layout"; // Import the Layout component
import styles from "./services.module.css";

const Services = () => {
  return (
    <Layout>
      <div className={styles.servicesContainer}>
        <h1 className={styles.heading}>Our Services</h1>

        <section className={styles.serviceSection}>
          <h2>Terms & Conditions</h2>
          <p>
            Our Terms & Conditions are designed to ensure that our services are
            used fairly and responsibly. Please read them carefully.
          </p>
        </section>

        <section className={styles.serviceSection}>
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is of utmost importance to us. Our Privacy Policy
            outlines how we collect, use, and safeguard your information.
          </p>
        </section>

        <section className={styles.serviceSection}>
          <h2>Location</h2>
          <p>
            Find our locations and get directions to visit us. We look forward
            to welcoming you.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
