import React from 'react';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoIcon}>
        <img src="/vector.svg" alt="Logo Icon" className={styles.vectorIcon} />
      </div>
      <div className={styles.logoText}>PRiME</div>
    </div>
  );
};

export default Logo;