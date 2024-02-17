import React from "react";
import Layout from "./layout";
import GameLevelCard from "../components/GameLevelCard";
import styles from "./levels.module.css";
import { useRouter } from "next/router";
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
            image="policy.jpeg"
            title="Basic Policy"
            description="This is a basic policy level"
            points={2000}
            difficulty="easy"
            isLocked={false}
            onClick={() => {
              goTolevel("levels/basic-policy");
            }}
          ></GameLevelCard>
          <GameLevelCard
            image="risk.png"
            title="Basic Risks"
            description="This is a basic risks level"
            points={2000}
            difficulty="easy"
            isLocked={true}
          ></GameLevelCard>
          <GameLevelCard
            image="incident.png"
            title="Basic Risks"
            description="This is a basic risks level"
            points={2000}
            difficulty="easy"
            isLocked={true}
          ></GameLevelCard>
          <GameLevelCard
            image="risk.png"
            title="Basic Risks"
            description="This is a basic risks level"
            points={2000}
            difficulty="easy"
            isLocked={true}
          ></GameLevelCard>
        </div>
      </div>
    </Layout>
  );
};

export default Levels;
