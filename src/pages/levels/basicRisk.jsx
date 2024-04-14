import React, { useState } from "react";
import Layout from "../layout";
import styles from "./basicRisk.module.css";
import { useRouter } from "next/router";
import WithAuthProtection from "../../../config/withAuthProtection";

function BasicRisk() {
    const [currentStage, setCurrentStage] = useState(0); 
    const [feedback, setFeedback] = useState("");
    const router = useRouter();

    const scenarios = [
        {
            image: "/risk.jpg",
            correctRisk: "Unattended Laptop",
            risks: ["Unattended Laptop", "Sticky Note with Password", "Open Email with Phishing Attempt"],
            correctMitigation: "Lock the device",
            mitigationOptions: ["Encrypt the data", "Lock the device", "Update the software"],
        },
        {
            image: "/risk2link.jpg",
            correctRisk: "Clicking on a Suspicious Link",
            risks: ["Clicking on a Suspicious Link", "Writing Down Passwords", "Unsecured Router"],
            correctMitigation: "Avoid clicking unknown links",
            mitigationOptions: ["Use strong passwords", "Avoid clicking unknown links", "Secure the network"],
        },
        {
            image: "/risk3phishing.jpg",
            correctRisk: "Phishing Website",
            risks: ["Phishing Website", "Scam SMS Notification", "Visible Sensitive Information"],
            correctMitigation: "Close the phishing website",
            mitigationOptions: ["Close the phishing website", "Ignore scam SMS", "Cover windows to block view"],
        },
    ];

    const totalStages = scenarios.length * 2;
    const scenarioIndex = Math.floor(currentStage / 2);
    const isMitigationStage = currentStage % 2 === 1;
    const isGameCompleted = currentStage >= totalStages;
    const currentScenario = scenarios[scenarioIndex];

    const handleOptionSelection = (option) => {
        const { correctRisk, correctMitigation } = currentScenario;
        if ((isMitigationStage && option === correctMitigation) || (!isMitigationStage && option === correctRisk)) {
            setCurrentStage(currentStage + 1);  
            setFeedback("");  
        } else {
            setFeedback("Incorrect, please try again.");
        }
    };

    const handleReturnToLevels = () => {
        router.push("/levels");
    };

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>Cyber Awareness: Understanding Risks</h1>
                
                {!isGameCompleted ? (
                    <>
                        <img src={currentScenario.image} alt="Interactive Risk Scenario" className={styles.interactiveImage} />
                        <p className={styles.feedback}>{feedback || (isMitigationStage ? "Select the correct action to mitigate the risk:" : "Identify the risk in the image:")}</p>
                        <div className={styles.options}>
                            {(isMitigationStage ? currentScenario.mitigationOptions : currentScenario.risks).map((option, index) => (
                                <button key={index} onClick={() => handleOptionSelection(option)} className={styles.optionButton}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={styles.congratulations}>
                        <h2>Congratulations!</h2>
                        <p>You have completed this level.</p>
                        <button onClick={handleReturnToLevels} className={styles.backButton}>Back to Levels</button>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default WithAuthProtection(BasicRisk);