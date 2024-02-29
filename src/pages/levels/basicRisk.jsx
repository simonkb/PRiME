import React, { useState } from "react";
import Layout from "../layout"; // Update this import based on your project structure
import styles from "./basicRisk.module.css"; // Ensure this CSS module exists and is correctly imported

// Defining the quiz content directly within the component for simplicity
const quizContent = {
  questionsAboutRisk: [
    {
      id: 1,
      question: "What is a risk in cybersecurity?",
      options: [
        "An identified vulnerability",
        "A potential threat that could exploit a vulnerability",
        "A secure network",
        "Antivirus software",
      ],
      correctAnswer: "A potential threat that could exploit a vulnerability",
      feedback:
        "Risk involves potential threats that exploit vulnerabilities, not the vulnerabilities themselves or security measures.",
    },
    {
      id: 2,
      question: "Why is it important to manage risks?",
      options: [
        "To ensure compliance with laws",
        "To protect assets and ensure business continuity",
        "To make IT department's job easier",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      feedback:
        "Managing risks is crucial for compliance, protection of assets, business continuity, and overall IT security.",
    },
    {
      id: 3,
      question: "Which of the following is a method to manage risk?",
      options: [
        "Use of strong passwords",
        "Regular software updates",
        "Employee awareness training",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      feedback:
        "All listed methods are effective in managing cybersecurity risks.",
    },
  ],
  assetQuestions: [
    {
      id: 4,
      question:
        "What type of asset is most commonly targeted by cyber attacks?",
      options: [
        "Office supplies",
        "Information",
        "Physical buildings",
        "Corporate vehicles",
      ],
      correctAnswer: "Information",
      feedback:
        "Information is the most valuable asset to attackers, often targeted in cyber attacks.",
    },
    {
      id: 5,
      question: "Which asset is crucial for day-to-day business operations?",
      options: [
        "Employee manuals",
        "Technology Infrastructure",
        "Marketing brochures",
        "Annual reports",
      ],
      correctAnswer: "Technology Infrastructure",
      feedback:
        "Technology infrastructure is essential for daily operations in a modern business environment.",
    },
    {
      id: 6,
      question:
        "Identify an asset that, if compromised, could lead to reputational damage.",
      options: [
        "Customer Data",
        "Unused office space",
        "Outdated software",
        "Overstocked inventory",
      ],
      correctAnswer: "Customer Data",
      feedback:
        "Compromised customer data can significantly damage a company's reputation and trust.",
    },
  ],
  riskAssets: [
    { id: 1, name: "Email", imageUrl: "/path/to/email/image.png" }, // Please replace with actual image paths
    {
      id: 2,
      name: "Printed Documents",
      imageUrl: "/path/to/documents/image.png",
    },
    {
      id: 3,
      name: "Cloud Storage",
      imageUrl: "/path/to/cloud/storage/image.png",
    },
    { id: 4, name: "Public Wi-Fi", imageUrl: "/path/to/public/wifi/image.png" },
  ],
  scenarios: [
    "A phishing email attempting to steal login credentials.",
    "An unpatched server vulnerable to exploitation.",
    "Sensitive data left unprotected on a shared drive.",
    "Weak passwords that could be easily guessed.",
    "Lack of employee awareness leading to accidental breaches.",
    "Using unsecured public Wi-Fi to access company data.",
    "Failure to regularly update software and systems.",
  ],
};

const BasicRisk = () => {
    const [currentStage, setCurrentStage] = useState('questionsAboutRisk');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  
    const handleAnswer = (option, question) => {
      if (option === question.correctAnswer) {
        setFeedback("Correct! " + question.feedback); // Assuming 'feedback' is a positive explanation
        setIsCorrectAnswer(true);
        setTimeout(() => {
          if (currentQuestionIndex < quizContent[currentStage].length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else if (currentStage === 'questionsAboutRisk') {
            setCurrentStage('assetQuestions');
            setCurrentQuestionIndex(0);
          } else if (currentStage === 'assetQuestions') {
            setCurrentStage('riskAssets');
          }
          setFeedback(''); // Clear feedback for the next question
          setIsCorrectAnswer(false);
        }, 2000); // Time in milliseconds before auto-advancing
      } else {
        setFeedback("Incorrect. " + question.feedback); // Assuming 'feedback' includes why the wrong options are incorrect
        setIsCorrectAnswer(false);
        // Do not advance to the next question automatically if the answer is wrong
      }
    };

  const renderQuestionStage = () => {
    const question = quizContent[currentStage][currentQuestionIndex];
    return (
      <>
        <h2>{currentStage === 'questionsAboutRisk' ? 'Understanding Risks' : 'Understanding Assets'}</h2>
        <div className={styles.question}>
          <p>{question.question}</p>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option, question)}
              className={`${styles.answerButton} ${isCorrectAnswer && option === question.correctAnswer ? styles.correct : ''}`}
              disabled={feedback !== ''}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && <div className={styles.feedback}>{feedback}</div>}
      </>
    );
  };

  const renderAssetStage = () => {
    return (
      <div className={styles.assetSelection}>
        {quizContent.riskAssets.map((asset) => (
          <div key={asset.id} className={styles.asset}>
            <img
              src={asset.imageUrl}
              alt={asset.name}
              className={styles.assetImage}
            />
            <p>{asset.name}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderScenarioStage = () => {
    return (
      <ul className={styles.scenarios}>
        {quizContent.scenarios.map((scenario, index) => (
          <li key={index}>{scenario}</li>
        ))}
      </ul>
    );
  };

  return (
    <Layout>
      <div className={styles.container}>
        {currentStage !== "riskAssets" &&
          currentStage !== "scenarios" &&
          renderQuestionStage()}
        {currentStage === "riskAssets" && renderAssetStage()}
        {currentStage === "scenarios" && renderScenarioStage()}
      </div>
    </Layout>
  );
};

export default BasicRisk;
