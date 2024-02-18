import React, { useState } from 'react';
import Layout from '../layout';
import './basicPolicy.module.css';
import { useRouter } from 'next/router';


const BasicPolicy = () => {
  const router = useRouter(); // Use the useRouter hook for navigation
  const [questions] = useState([
    {
      id: 1,
      text: "What does a privacy policy typically include?",
      image: "/q1pic.webp",
      situation: "You're about to create an account on a popular social media platform. Before you can proceed, a message pops up asking you to review and accept the privacy policy. What key information should you expect to find in this document?",
      answers: [
        { id: 'a', text: 'Just the company logo', isCorrect: false },
        { id: 'b', text: 'Details on data collection, usage, and how your privacy is protected.', isCorrect: true },
        { id: 'c', text: 'Celebrity endorsements of the platform.', isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Why is data encryption important?",
      image: "/q2pic.webp",
      situation: "You're working from a café, sending an email containing sensitive project details to a colleague. Considering the public Wi-Fi, why is it crucial to use encrypted communication?",
      answers: [
        { id: 'a', text: 'It speeds up your internet connection.', isCorrect: false },
        { id: 'b', text: 'It secures your email from potential eavesdroppers, ensuring only the intended recipient can read it.', isCorrect: true },
        { id: 'c', text: 'It compresses the email to save space.', isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "What is two-factor authentication (2FA)?",
      image: "/q3pic.webp",
      situation: "Your bank has recently introduced an optional security feature that requires not just your password, but also a code sent to your phone to access your account. This feature is known as:",
      answers: [
        { id: 'a', text: 'A method that requires two different passwords', isCorrect: false },
        { id: 'b', text: 'Two-Factor Authentication, adding an extra layer of security to your account', isCorrect: true },
        { id: 'c', text: 'Temporary Account Lock', isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "What does GDPR stand for and why is it important?",
      image: "/q4pic.webp",
      situation: "Your company is expanding its services to include customers in Europe. To comply with European law, you need to understand GDPR. What does GDPR primarily protect?",
      answers: [
        { id: 'a', text: 'Personal data and privacy of individuals in the EU', isCorrect: true },
        { id: 'b', text: 'The interests of companies outside the EU', isCorrect: false },
        { id: 'c', text: 'Trade secrets only', isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "Which of the following is a common phishing attack method?",
      image: "/q5pic.webp",
      situation: "You receive an email that looks like it's from your bank, asking you to confirm your account details via a link. This is likely a:",
      answers: [
        { id: 'a', text: 'Phishing attempt trying to trick you into giving away personal information', isCorrect: true },
        { id: 'b', text: 'Legitimate security check by the bank', isCorrect: false },
        { id: 'c', text: 'Routine bank survey for customer feedback', isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "What is a VPN and why would you use it?",
      image: "/q6pic.webp",
      situation: "While traveling, you need to access sensitive work documents over hotel Wi-Fi. To protect your data, you decide to use a:",
      answers: [
        { id: 'a', text: 'Virtual Public Network, to get faster internet speed', isCorrect: false },
        { id: 'b', text: 'Very Private Network, to create a private network within a public one', isCorrect: false },
        { id: 'c', text: 'Virtual Private Network, to securely connect to the internet', isCorrect: true },
      ],
    },
    {
      id: 7,
      text: "Which of these is considered a strong password?",
      image: "/q7pic.webp",
      situation: "You're creating a new account and need to set a password.",
      answers: [
        { id: 'a', text: 'Simple patterns like 123456', isCorrect: false },
        { id: 'b', text: 'Personal information, such as your name or birthdate', isCorrect: false },
        { id: 'c', text: 'A mix of uppercase and lowercase letters, numbers, and special characters', isCorrect: true },
      ],
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelect = (answer) => {
    if (answer.isCorrect) setScore(score + 1);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true); // Display the score at the end
    }
  };

  const handleStartLevel = () => {
    setShowIntro(false);
    setCurrentQuestionIndex(0);
    setScore(0); // Reset score for a new game
    setShowScore(false); // Hide score display until the end
  };

  const navigateToHomePage = () => {
    router.push("/home"); // Navigate to the home page
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      fontFamily: '"Arial", sans-serif',
    },
    introMessage: {
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '20px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      marginTop: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'block', // Ensure buttons are vertically stacked
      width: 'calc(100% - 40px)', // Account for padding
      textAlign: 'center',
      textDecoration: 'none',
    },
    questionContainer: {
      textAlign: 'center',
    },
    scenarioImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    answers: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  };
  

 
  return (
    <Layout>
      <div style={styles.container}>
        {showIntro ? (
          <div style={styles.introMessage}>
            <p>Embark on a journey through the realms of cybersecurity. Ready to test your knowledge and secure the digital frontier?</p>
            <button onClick={handleStartLevel} style={styles.button}>Begin Adventure</button>
          </div>
        ) : showScore ? (
          <div style={styles.scoreDisplay}>
            <p>Your Score: {score} / {questions.length}</p>
            <button onClick={navigateToHomePage} style={{...styles.button, ...styles.homeButton}}>Return to Home</button>
          </div>
        ) : (
          <div style={styles.questionContainer}>
            <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
            <img src={questions[currentQuestionIndex].image} alt="Question scenario" style={styles.scenarioImage} />
            <div style={styles.contentContainer}>
              <h1>Scenario {currentQuestionIndex + 1}</h1>
              <p>{questions[currentQuestionIndex].situation}</p>
              <div>{questions[currentQuestionIndex].text}</div>
              <div style={styles.answers}>
                {questions[currentQuestionIndex].answers.map((answer) => (
                  <button key={answer.id} onClick={() => handleAnswerSelect(answer)} style={styles.button}>
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BasicPolicy;