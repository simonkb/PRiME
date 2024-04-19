import React from "react";
import Link from "next/link";
import Layout from "./layout";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundContent}>
          <h1 className={styles.notFoundTitle}>404</h1>
          <p className={styles.notFoundDescription}>
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link href="/" className={styles.homeLink}>
            Go to Home
          </Link>
        </div>
        <div className={styles.notFoundImageContainer}>
          <img
            src="/homebackground4.webp"
            alt="Not Found"
            className={styles.notFoundImage}
          />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
