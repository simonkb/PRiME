import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../config/firebaseConfig";

// Component Imports
import Header from "../components/header";
import HomeBackground from "../components/home_background";
import Card from "../components/card";
import GameLevelCard from "../components/GameLevelCard";
import Footer from "../components/footer";
import LoginSignup from "../components/loginSignup";

// Styles Import
import styles from "./index.module.css";

const LandingPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  // Redirect logged in user
  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, loading]);

  // Function to handle smooth scrolling
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
    <div>
      <Header />

      {/* Hero Background Section */}
      <HomeBackground
        position="relative"
        top="0"
        left="0"
        images={["/background-1@2x.png", "/346520-1@2x.png", "/cta@2x.png"]}
      >
        <div id="homeSegment" className={styles.homeText}>
          <div className={styles.appName}>
            <div className={styles.bars} />
            Policy, Risk and Incident Management Education
            <div className={styles.bars} />
          </div>
          <div className={styles.motto}>
            Empowering Security, Defending Futures: Unleash Your CyberGuard
            Instincts!
          </div>
          <div className={styles.scrollDownContainer}>
            <div className={styles.scrollText}>Scroll down</div>
            <img
              className={styles.downWardArrow}
              alt=""
              src="/iconnavigationarrow-downward-24px.svg"
            />
          </div>
        </div>
      </HomeBackground>

      {/* Main Content Container */}
      <div className={`container ${styles.landingPage}`}>
        {/* About Us Section */}
        <div className={styles.policyRiskContainer}>
          {/* About Us Section */}
          <div id="aboutUsSegment" className={styles.aboutUsContainer}>
            <div className={styles.mission}>
              <div className={styles.bar2} />
              Our mission is
              <div className={styles.bar2} />
            </div>
            <div className={styles.missionStatement}>
              Meeting the needs of businesses and employees by closing the
              knowledge gap in cybersecurity!
            </div>
          </div>

          {/* Cards Row */}
          <div className={styles.cardRow}>
            <Card
              className="cardItem"
              image="policy.jpeg"
              title="Policy Compliance"
              description="Elevate your workforce with our tailored simulation and training solutions, illustrating the advantages of adhering to company policies and the consequences of non-compliance."
              topBarColor="0 2px 0 #61ffda inset"
              image2="/frame-88.svg"
            />
            <Card
              className="cardItem"
              image="risk.png"
              title="Risk Management"
              description="Strengthen your organization's integrity through our comprehensive policy compliance simulation and training, showcasing the benefits of adhering to company policies while emphasizing the risks associated with non-compliance."
              topBarColor="0 2px 0 #ff626b inset"
              image2="/frame-90.svg"
            />
            <Card
              className="cardItem"
              image="incident.png"
              title="Incident Response"
              description="Enhance your team's readiness to handle unforeseen challenges with our incident response training. We simulate real-world scenarios, empowering your staff to effectively respond to incidents and mitigate potential damages swiftly and effectively."
              topBarColor="0 2px purple inset"
              image2="/frame-89.svg"
            />
          </div>
        </div>

        {/* Levels Segment */}
        <div id="levelsSegment" className={styles.levels}>
          <h1>Levels and Categories</h1>
          <div className={`container ${styles.levelsContainer}`}>
            <GameLevelCard
              image="phishing.jpeg"
              title="The Phishing Menace"
              description={`In this challenge, you will face a flood of emails. Some are harmless, while others contain phishing attempts. The goal is to actively make decisions to identify and avoid clicking on malicious links while considering the your company's cybersecurity policies.`}
              points={2000}
              difficulty="easy"
              isLocked={true}
              onClick={() => {
                goTolevel("levels/the-phishing-menace");
              }}
            ></GameLevelCard>
            <GameLevelCard
              image="policy.jpeg"
              title="Basic Policy"
              description="In this level, you're thrust into the role of a digital policy analyst for a burgeoning tech company. As the digital landscape evolves, so too does the complexity of maintaining privacy and security. Your challenge? To navigate through a maze of policy decisions, each more intricate than the last."
              points={2000}
              difficulty="easy"
              isLocked={true}
              onClick={() => {
                goTolevel("levels/basic-policy");
              }}
            ></GameLevelCard>
            <GameLevelCard
              image="The_Password_Enigma.webp"
              title="The Password Enigma"
              description="Embark on a mission as a cybersecurity guardian for an emerging tech enterprise. This level challenges you to craft the fortress of the future: strong, impenetrable passwords. Your task is to weave through the labyrinth of password creation and management, applying advanced security principles to shield against the ever-present threats. Can you outsmart potential breaches and set a new standard for digital security?"
              points={2000}
              difficulty="easy"
              isLocked={true}
              onClick={() => {
                goTolevel("levels/passwordEnigma");
              }}
            ></GameLevelCard>
            <GameLevelCard
              image="malware.jpeg"
              title="The Malware Invasion"
              description="This level involves a dynamic challege of malwares and viruses affecting the user's computer and the user will lear how to avoid downloading suspicious files, mitigating risks and stick to company policy."
              points={2000}
              difficulty="easy"
              isLocked={true}
              onClick={() => {
                goTolevel("levels/the-malware-invasion");
              }}
            ></GameLevelCard>
            <GameLevelCard
              image="OIG3.jpeg"
              title="Identifiy Basic Risks"
              description="This level trains users to spot and mitigate common cybersecurity threats in the workplace, such as unattended laptops and phishing emails, enhancing their ability to safeguard sensitive information"
              points={2000}
              difficulty="easy"
              isLocked={true}
              onClick={() => {
                goTolevel("levels/basicRisk");
              }}
            ></GameLevelCard>
            <GameLevelCard
              image="Ransomware.jpeg"
              title="Ransomware "
              description="This level immerses users in a realistic ransomware attack scenario to teach the critical steps of identifying, containing, and mitigating such threats. Users will navigate through stages simulating a ransomware infiltration, learning to manage the crisis by disconnecting affected devices, identifying malware characteristics, and restoring systems safely.  "
              points={1000}
              difficulty="super easy"
              isLocked={true}
              onClick={() => {
                goTolevel("levels/ransomware");
              }}
            ></GameLevelCard>
          </div>
        </div>

        {/* Authentication Section */}
      
          <div id="authentication" className={styles.authentication}>
            <LoginSignup />
          </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
