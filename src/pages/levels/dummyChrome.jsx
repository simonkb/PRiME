import React from "react";
import { useState } from "react";
import styles from "./dummyChrome.module.css";
import VirtualAssistant from "../../components/vAssistant";
const GoogleSearch = ({ websites }) => {
  const [currentWebsiteIndex, setCurrentWebsiteIndex] = useState(0);

  const handlePrevWebsite = () => {
    setCurrentWebsiteIndex((prevIndex) =>
      prevIndex === 0 ? websites.length - 1 : prevIndex - 1
    );
  };
  const handleNextWebsite = () => {
    setCurrentWebsiteIndex((prevIndex) =>
      prevIndex === websites.length - 1 ? 0 : prevIndex + 1
    );
  };
  const [content, setContent] = useState({
    level: "The malware invasion",
    type: "user questions",
    userQuestion: "",
    websiteDetails: websites[currentWebsiteIndex],
  });
  return (
    <div>
      <div className={styles.newTab}>
        <span className={styles.tabTitle}>New Tab</span>
        <span className={styles.tabIcon}>+</span>
      </div>
      <div className={styles.chromeHeader}>
        <div className={styles.tabSection}>
          <div className={styles.tab}>
            <div className={styles.tabIcons}>
              <span onClick={handlePrevWebsite} className={styles.tabIcon}>
                &#9665;
              </span>
              <span onClick={handleNextWebsite} className={styles.tabIcon}>
                &#9655;
              </span>
              <span className={styles.tabIcon}>&#8634;</span>
            </div>
          </div>
        </div>
        <div className={styles.addressBar}>
          {websites[currentWebsiteIndex].isSecure ? (
            <span className={styles.securityIcon}>&#128274;</span> // Secure icon
          ) : (
            <span className={styles.securityIcon}>&#x26A0;</span> // Not secure icon
          )}{" "}
          <input
            className={styles.addressInput}
            type="text"
            placeholder="Search or enter address"
            disabled={true}
            value={websites[currentWebsiteIndex].url}
          />
          <span className={styles.icon}>☆</span>
        </div>
        <span className={styles.icon}>&#8942;</span>
      </div>
      {websites.length === 0 ? (
        <>
          <div id={styles.top_bar}>
            <a className={styles.links} href="#">
              Gmail
            </a>
            <a className={styles.links} href="#">
              Images
            </a>
            <a className={styles.grid} href="#">
              <img
                title="Google apps"
                src="/google_app_.jpg"
                width="17"
                height="17"
              />
            </a>
            <button
              className={styles.signbutton}
              type="button"
              onClick={() => (window.location.href = "#")}
            >
              Sign in
            </button>
          </div>
          <div>
            <div className={styles.search}>
              <img src="/google.png" alt="Google icon" />
              <form action="#">
                <input
                  className={styles.searchBar}
                  type="text"
                  name="q"
                  title="Search"
                />
                <a className={styles.advanced_search} href="#">
                  Advanced Search
                </a>
                <br />
                <input className={styles.searchButton} value="Google Search" />
                <input className={styles.lucky} value="I am Feeling Lucky" />
              </form>
            </div>
          </div>
        </>
      ) : (
        <div>
          <VirtualAssistant content={content}></VirtualAssistant>
          <div className={styles.websitePreview}>
            <img
              src={websites[currentWebsiteIndex].screenshot}
              alt={websites[currentWebsiteIndex].name}
            />
          </div>

          <button
            className="btn btn-primary"
            style={{
              marginInline: 20,
              bottom: 200,
            }}
            onClick={handlePrevWebsite}
          >
            Prev
          </button>
          <button
            className="btn btn-success"
            style={{}}
            onClick={handleNextWebsite}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleSearch;
