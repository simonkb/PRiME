import React from "react";
import { useRouter } from "next/router";
import styles from "./footer.module.css";

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Services</h3>
          <ul>
            <li onClick={() => handleNavigation("/services")}>Terms & Conditions</li>
            <li onClick={() => handleNavigation("/services")}>Privacy Policy</li>
            <li onClick={() => handleNavigation("/services")}>Location</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>About Us</h3>
          <ul>
            <li onClick={() => handleNavigation("/aboutUs")}>Our Story</li>
            <li onClick={() => handleNavigation("/aboutUs")}>Careers</li>
            <li onClick={() => handleNavigation("/aboutUs")}>Team</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Help</h3>
          <ul>
            <li onClick={() => handleNavigation("/help")}>Customer Support</li>
            <li onClick={() => handleNavigation("/help")}>Contact Us</li>
            <li onClick={() => handleNavigation("/help")}>FAQs</li>
          </ul>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/face3logo.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/Xlogo.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/instalogo.png" alt="Instagram" />
        </a>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2024 PRiME L.L.C. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
