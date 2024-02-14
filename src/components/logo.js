import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={`${styles.vectorIcon} ${styles.rotateIcon}`} alt="" src="/vector.svg" />
      <div className={styles.prime}>PRiME</div>
    </div>
  );
};

export default Logo;
