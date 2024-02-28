// AboutUs.jsx
import React from "react";
import Layout from "./layout"; 
import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h1 className={styles.heading}>About Us</h1>

        <section className={styles.aboutSection}>
          <h2>Our Story</h2>
          <p>
            Learn about how our company was founded, our mission, and the journey we've been on to get where we are today.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>Careers</h2>
          <p>
            Interested in joining our team? Discover the career opportunities we currently have available and how you can apply.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>Team</h2>
          <p>
            Meet the people behind our company. Our dedicated team is the driving force behind our success.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
