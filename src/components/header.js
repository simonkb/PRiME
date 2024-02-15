import Logo from "./logo";
import styles from "./header.module.css";

const Header = () => {
  const scrollToDiv = (targetDiv) => {
    const targetElement = document.getElementById(targetDiv);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.navigation}>
        <div
          className={styles.menuItem}
          onClick={() => {
            scrollToDiv("homeSegment");
          }}
        >
          Home
        </div>
        <div
          className={styles.menuItem}
          onClick={() => {
            scrollToDiv("levelsSegment");
          }}
        >
          Levels
        </div>
        <div
          className={styles.menuItem}
          onClick={() => {
            scrollToDiv("aboutUsSegment");
          }}
        >
          About
        </div>
        <div
          className={styles.menuItem}
          onClick={() => {
            scrollToDiv("authentication");
          }}
        >
          Sign In
        </div>
        <div className={styles.searchBar}>
          <img alt="" src="/group-2000.svg" />

          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
