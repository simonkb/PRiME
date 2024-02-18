import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.promotion}> */}
        {/* <p>PRiME: privacy Risk Indident Managment Education</p> */}
      {/* </div> */}
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Services</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Location</li>
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
      <div className={styles.socialMedia}>
        <h1>Follow us on :  </h1>
        <ul>
        <li><img src="/face3logo.png" alt="Facebook Icon" width={40} height={40} /></li>
        <li><img src="/Xlogo.png" alt="X Icon" width={40} height={40} /></li>
        <li><img src="/instalogo.png" alt="Instagram Icon" width={40} height={40} /></li>
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
