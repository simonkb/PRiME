import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.promotion}>
        <p>80% off on your first three months subscription</p>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Services</h3>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>About us</h3>
          <ul>
            <li>Our story</li>
            <li>Careers</li>
            <li>Team</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Help</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Talk to our virtual assistant</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className={styles.socialMedia}>
        <p>Follow us on:</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2024 PRiME L.L.C. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
