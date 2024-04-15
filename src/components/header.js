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
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <nav className={styles.navigation}>
        <button className={styles.menuItem} onClick={() => scrollToDiv("homeSegment")}>
          Home
        </button>
        <button className={styles.menuItem} onClick={() => scrollToDiv("levelsSegment")}>
          Levels
        </button>
        <button className={styles.menuItem} onClick={() => scrollToDiv("aboutUsSegment")}>
          About Us
        </button>
        <button className={styles.menuItem} onClick={() => scrollToDiv("authentication")}>
          Sign In
        </button>
        <div className={styles.searchBar}>
          <img alt="Search" src="/group-2000.svg" className={styles.searchIcon} />
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
