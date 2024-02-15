import HomeBackground from "../components/home_background";
import Header from "../components/header";
import Card from "../components/card";
import styles from "./index.module.css";
import GameLevelCard from "../components/GameLevelCard";
import Footer from "../components/footer";
import AuthenticationView from "../components/loginSignup";
const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <div id="homeSegment">
        <HomeBackground
          position="absolute"
          top="0"
          left="0"
          images={["/background-1@2x.png", "/346520-1@2x.png", "/cta@2x.png"]}
        />
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
          <div className={styles.getStartedButton}>Get Started!</div>
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
          Meeting the needs of businesses and employees by closing the knowledge
          gap in cybersecurity!
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
            image="policy.jpeg"
            title="Basic Policy"
            description="This is a basic policy level"
            points={2000}
            difficulty="easy"
            isLocked={false}
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
      <div id="authentication" className={styles.authentication}>
        <AuthenticationView />
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerTopBar} />
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default LandingPage;
