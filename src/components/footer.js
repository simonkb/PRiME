import React from "react";
import { useRouter } from "next/router"; // Use useRouter for navigation
import styles from "./footer.module.css";

const Footer = () => {
  const router = useRouter(); // Initialize useRouter

  // Function to handle navigation
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Services</h3>
          <ul>
            <li onClick={() => handleNavigation("/terms")}>
              Terms & Conditions
            </li>
            <li onClick={() => handleNavigation("/privacy")}>Privacy Policy</li>
            <li onClick={() => handleNavigation("/location")}>Location</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>About Us</h3>
          <ul>
            <li onClick={() => handleNavigation("/our-story")}>Our Story</li>
            <li onClick={() => handleNavigation("/careers")}>Careers</li>
            <li onClick={() => handleNavigation("/team")}>Team</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Help</h3>
          <ul>
            <li onClick={() => handleNavigation("/virtual-assistant")}>FAQs</li>
            <li onClick={() => handleNavigation("/contact")}>Contact Us</li>
            <li onClick={() => handleNavigation("/faqs")}>
              Talk to our virtual assistant
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <h3>Follow Us On</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/face3logo.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Xlogo.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instalogo.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2024 PRiME L.L.C. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
