import React from "react";
import Layout from "./layout";
import GameLevelCard from "../components/GameLevelCard";
import styles from "./levels.module.css";
import { useRouter } from "next/router";
import WithAuthProtection from "../../config/withAuthProtection";

const Levels = () => {
  const router = useRouter();
  const goTolevel = (level) => {
    router.push(level);
  };
  return (
    <Layout>
      <div className="container" style={{ color: "white" }}>
        <h1>Levels and Categories</h1>
        <div className={`container ${styles.levelsContainer}`}>
          <GameLevelCard
            image="phishing.jpeg"
            title="The Phishing Menace"
            description={`In this challenge, you will face a flood of emails. Some are harmless, while others contain phishing attempts. The goal is to actively make decisions to identify and avoid clicking on malicious links while considering the your company's cybersecurity policies.`}
            points={2000}
            difficulty="easy"
            isLocked={false}
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
            isLocked={false}
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
            isLocked={false}
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
            isLocked={false}
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
            isLocked={false}
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
            isLocked={false}
            onClick={() => {
              goTolevel("levels/ransomware");
            }}
          ></GameLevelCard>
          
        </div>
      </div>
    </Layout>
  );
};

export default WithAuthProtection(Levels);
