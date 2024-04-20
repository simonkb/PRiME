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
  <p>Find our locations and get directions to visit us. We look forward to welcoming you.</p>
  <div className={styles.mapContainer}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.1767657167984!2d55.67345907546715!3d24.200587978365913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140f2dda9fe5eb2b%3A0x2f4fe4d096ddf6!2sUnited%20Arab%20Emirates%20University!5e0!3m2!1sen!2sae!4v1709127030375!5m2!1sen!2sae"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="UAE University Location"
    ></iframe>
  </div>
</section>
      </div>
    </Layout>
  );
};

export default Services;
