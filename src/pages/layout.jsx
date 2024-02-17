import React from "react";
import Link from "next/link";
import styles from "../components/header.module.css";
import Logo from "../components/logo";
import Footer from "../components/footer";
import styles2 from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          <Link href="/home" className={styles.menuItem}>
            <p>Home</p>
          </Link>
          <Link href="/levels" className={styles.menuItem}>
            <p>Levels</p>
          </Link>
          <Link href="/settings" className={styles.menuItem}>
            <p>Settings</p>
          </Link>
          <Link href="/profile" className={styles.menuItem}>
            <p>Profile</p>
          </Link>
          <div className={styles.searchBar}>
            <img alt="" src="/group-2000.svg" />

            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />
          </div>
        </nav>
      </header>
      <main className={styles2.wrapper}>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
