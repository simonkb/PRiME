<<<<<<< HEAD
import React, { useState } from 'react';
import Layout from "../layout";
import styles from './basicRisk.module.css';
=======
import React, { useState } from "react";
import Layout from "../layout"; // Update this import based on your project structure
import styles from "./basicRisk.module.css"; // Ensure this CSS module exists and is correctly imported
import WithAuthProtection from "../../../config/withAuthProtection";
>>>>>>> origin/Simon

function BasicRisk() {
    const [stage, setStage] = useState(0);
    const [selectedRisk, setSelectedRisk] = useState('');

    const scenarios = [
        {
            image: '/risk.jpg',
            risks: ['Unattended laptop', 'Personal Phone', 'folder'],
            mitigationOptions: ['Mitigation 1', 'Mitigation 2', 'Mitigation 3']
        },
        {
            image: '/path/to/your/second/scenario/image.jpg',
            risks: ['Risk A', 'Risk B', 'Risk C'],
            mitigationOptions: ['Mitigation A', 'Mitigation B', 'Mitigation C']
        },
        {
            image: '/path/to/your/third/scenario/image.jpg',
            risks: ['Risk X', 'Risk Y', 'Risk Z'],
            mitigationOptions: ['Mitigation X', 'Mitigation Y', 'Mitigation Z']
        }
    ];

    const currentScenario = scenarios[Math.floor(stage / 3)];
    const currentStep = stage % 3;

    const handleRiskSelection = (risk) => {
        setSelectedRisk(risk);
        setStage(stage + 1);
    };

    const handleMitigationSelection = (mitigation) => {
        if (mitigation) {
            setStage(stage + 1);
        }
    };

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>Cyber Awareness: Understanding Risks</h1>
                {currentStep === 0 && (
                    <div>
                        <h2>Scenario {Math.floor(stage / 3) + 1}</h2>
                        <img
                            src={currentScenario.image}
                            alt="Interactive Risk Scenario"
                            className={styles.interactiveImage}
                            onClick={() => setStage(stage + 1)}
                        />
                    </div>
                )}
                {currentStep === 1 && (
                    <div>
                        <h2>Identify the Risk</h2>
                        {currentScenario.risks.map((risk, index) => (
                            <button key={index} onClick={() => handleRiskSelection(risk)}>
                                {risk}
                            </button>
                        ))}
                    </div>
                )}
                {currentStep === 2 && (
                    <div>
                        <h2>Fix the Risk</h2>
                        {currentScenario.mitigationOptions.map((mitigation, index) => (
                            <button key={index} onClick={() => handleMitigationSelection(mitigation)}>
                                {mitigation}
                            </button>
                        ))}
                    </div>
                )}
                {stage >= scenarios.length * 3 && (
                    <div>
                        <h2>Congratulations!</h2>
                        <p>You have completed the training.</p>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default WithAuthProtection(BasicRisk);
