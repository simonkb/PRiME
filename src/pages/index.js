import HomeBackground from "../components/home_background";
import Header from "../components/header";
import Card from "../components/card";
import styles from "./index.module.css";
import GameLevelCard from "../components/GameLevelCard";
import Footer from "../components/footer";
import LoginSignup from "../components/loginSignup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../config/firebaseConfig";
const LandingPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [loading]);
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
      <HomeBackground
        position={"relative"}
        top="0"
        left="0"
        images={["/background-1@2x.png", "/346520-1@2x.png", "/cta@2x.png"]}
      >
        <div id="homeSegment">
          <div className={styles.homeText}>
            <div className={styles.appName}>
              <div className={styles.bars} />
              <div>Policy, Risk and Incident Management Education</div>
              <div className={styles.bars} />
            </div>
            <div className={styles.motto}>
              Empowering Security, Defending Futures: Unleash Your CyberGuard
              Instincts!
            </div>
            <div
              className={styles.getStartedButton}
              onClick={() => {
                scrollToDiv("authentication");
              }}
            >
              Get Started!
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
        </div>
      </HomeBackground>
      <div className={`container {styles.landingPage}`}>
        <div id="aboutUsSegment" className={styles.aboutUsContainer}>
          <div className={styles.mission}>
            <div className={styles.bar2} />
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                fontSize: "larger",
              }}
            >
              Our mission is
            </div>
            <div className={styles.bar2} />
          </div>
          <div className={styles.missionStatement}>
            Meeting the needs of businesses and employees by closing the
            knowledge gap in cybersecurity!
          </div>
          <div className={styles.cardContainer}>
            <Card
              image={"policy.jpeg"}
              title={"Policy Compliance"}
              description={
                "Elevate your workforce with our tailored simulation and training solutions, illustrating the advantages of adhering to company policies and the consequences of non-compliance."
              }
              topBarColor={"0 2px 0#61ffda inset"}
              image2={"/frame-88.svg"}
            ></Card>
            <Card
              title={"Risk Management"}
              description={
                "Strengthen your organization's integrity through our comprehensive policy compliance simulation and training, showcasing the benefits of adhering to company policies while emphasizing the risks associated with non-compliance."
              }
              image={"/risk.png"}
              image2={"/frame-90.svg"}
              topBarColor={"0 2px 0#ff626b inset"}
            ></Card>
            <Card
              title={"Incident Response"}
              description={
                "Enhance your team's readiness to handle unforeseen challenges with our incident response training. We simulate real-world scenarios, empowering your staff to effectively respond to incidents and mitigate potential damages swiftly and effectively."
              }
              image={"incident.png"}
              image2={"/frame-89.svg"}
              topBarColor={"0 2px purple inset"}
            ></Card>
          </div>
        </div>
        <div id="levelsSegment" className={styles.levels}>
          <h1>Levels and Categories</h1>
          <div className={styles.levelsContainer}>
            <GameLevelCard
              image="phishing.jpeg"
              title="The Phishing Menace"
              description="In this challenge, you will face a flood of emails. Some are harmless, while others contain phishing attempts. The goal is to actively make decisions to identify and avoid clicking on malicious links while considering the your company's cybersecurity policies."
              points={2000}
              difficulty="easy"
              isLocked={false}
              onClick={() => {
                scrollToDiv("authentication");
              }}
            ></GameLevelCard>
            <GameLevelCard
              image="policy.jpeg"
              title="Basic Policy"
              description="In this level, you're thrust into the role of a digital policy analyst for a burgeoning tech company. As the digital landscape evolves, so too does the complexity of maintaining privacy and security. Your challenge? To navigate through a maze of policy decisions, each more intricate than the last."
              points={2000}
              difficulty="easy"
              isLocked={true}
            ></GameLevelCard>
            <GameLevelCard
            image="The_Password_Enigma.webp"
            title="The Password Enigma"
            description="Embark on a mission as a cybersecurity guardian for an emerging tech enterprise. This level challenges you to craft the fortress of the future: strong, impenetrable passwords. Your task is to weave through the labyrinth of password creation and management, applying advanced security principles to shield against the ever-present threats. Can you outsmart potential breaches and set a new standard for digital security?"
            points={2000}
            difficulty="easy"
            isLocked={true}
            
          ></GameLevelCard>
          <GameLevelCard
            image="malware.jpeg"
            title="The Malware Invasion"
            description="This level involves a dynamic challenge of malware and viruses affecting the user's computer and the user will learn how to avoid downloading suspicious files, mitigating risks and stick to company policy."
            points={2000}
            difficulty="easy"
            isLocked={true}
            
          ></GameLevelCard>
          <GameLevelCard
            image="OIG3.jpeg"
            title="Identify Basic Risks"
            description="This level trains users to spot and mitigate common cybersecurity threats in the workplace, such as unattended laptops and phishing emails, enhancing their ability to safeguard sensitive information"
            points={2000}
            difficulty="easy"
            isLocked={true}
            
          ></GameLevelCard>
          <GameLevelCard
            image="Ransomware.jpeg"
            title="Ransomware "
            description="This level immerses users in a realistic ransomware attack scenario to teach the critical steps of identifying, containing, and mitigating such threats. Users will navigate through stages simulating a ransomware infiltration, learning to manage the crisis by disconnecting affected devices, identifying malware characteristics, and restoring systems safely.  "
            points={1000}
            difficulty="super easy"
            isLocked={true}
            
          ></GameLevelCard>
          </div>
        </div>
        <div id="authentication" className={styles.authentication}>
          <LoginSignup />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default LandingPage;