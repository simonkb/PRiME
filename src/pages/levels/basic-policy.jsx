import React, { useState } from 'react';
import Layout from '../layout';
import styles from './basicPolicy.module.css';
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
      text: "Authentication types?",
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
 

 // Adding the policy text that will be shown with the new set of questions
 const policyText = `SocialSphere Privacy Policy

 Effective Date: 2/19/2024
 
 Welcome to SocialSphere! Your privacy is paramount to us. This Privacy 
 Policy outlines how we collect, use, share, and protect your personal 
 information across our digital platforms.
 
 1. Information We Collect
 -Personal Information: Includes but is not limited to names, email 
 addresses, and phone numbers, provided by you when registering for 
 our services, subscribing to newsletters, or contacting support.
 
 -Usage Data: Details on how you interact with our services, such as 
 website visitation patterns, app usage analytics, and preferences.

 -Cookies and Tracking Technologies: We utilize cookies and similar 
 technologies to enhance your user experience, personalize content, 
 and analyze our traffic.
 

 2. Use of Information
 Your data enables us to:
 -Provide, maintain, and improve our services;
 -Personalize your experience;
 -Communicate with you about our services, including updates and 
 customer support;
 -Enhance security and fraud prevention;
 -Comply with legal obligations.


 3. Sharing of Information
 We may share your information with:
 -Service providers acting on our behalf;
 -Business partners for jointly offered services;
 -Authorities, if legally required or to protect our rights.


 4. Your Rights
 Under applicable laws, you have rights to:
 -Access and obtain a copy of your data;
 -Request correction or deletion;
 -Object to or restrict processing;
 -Withdraw consent at any time, where applicable.


 5. Data Security
 -We implement robust security measures to protect your data against 
 unauthorized access, alteration, disclosure, or destruction.
 
 6. International Transfers
 -We operate globally and may transfer your information to countries 
 outside of your residence, under safeguards as required by law.
 
 7. Changes to This Policy
 -We may update this policy from time to time. We will notify you of 
 significant changes by posting the new policy on our website and/or 
 through other communication channels.
 
 8. Contact Us
 -For questions about this privacy policy or your data, contact our 
 Privacy Officer at:
 Email: privacy@socialsphere.com`;
 
   const policyQuestions = [
    {
      id: 8,
      text: "According to the policy, how is user data protected?",
      answers: [
        { id: 'a', text: 'By asking users to keep it secret', isCorrect: false },
        { id: 'b', text: 'Through industry-standard encryption methods', isCorrect: true },
        { id: 'c', text: 'Data is not protected', isCorrect: false },
      ],
    },
    {
      id: 9,
      text: "What actions can users take regarding their data under User Rights?",
      answers: [
        { id: 'a', text: 'Request data deletion or modification', isCorrect: true },
        { id: 'b', text: 'Sell their data directly', isCorrect: false },
        { id: 'c', text: 'Share data with third parties without consent', isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "How are users notified of policy updates?",
      answers: [
        { id: 'a', text: 'Through platform notifications', isCorrect: true },
        { id: 'b', text: 'By postal mail', isCorrect: false },
        { id: 'c', text: 'No notification is provided', isCorrect: false },
      ],
    },
    {
      id: 11,
      text: "Who can users contact for privacy concerns?",
      answers: [
        { id: 'a', text: 'The nearest police station', isCorrect: false },
        { id: 'b', text: 'Privacy Officer at privacy@socialsphere.com', isCorrect: true },
        { id: 'c', text: 'No one, users are on their own', isCorrect: false },
      ],
    },
    {
      id: 12,
      text: "What purpose does data sharing serve?",
      answers: [
        { id: 'a', text: 'Improving service and personalizing user experience', isCorrect: true },
        { id: 'b', text: 'Data is not shared under any circumstance', isCorrect: false },
        { id: 'c', text: 'To spam users with ads', isCorrect: false },
      ],
    },
    {
      id: 13,
      text: "What kind of data does the platform collect?",
      answers: [
        { id: 'a', text: 'Only email addresses', isCorrect: false },
        { id: 'b', text: 'Names, email addresses, and browsing behavior', isCorrect: true },
        { id: 'c', text: 'Credit card information only', isCorrect: false },
      ],
    },
    {
      id: 14,
      text: "Can users opt-out of targeted advertising?",
      answers: [
        { id: 'a', text: 'Yes, by adjusting their account settings', isCorrect: true },
        { id: 'b', text: 'No, it’s mandatory for all users', isCorrect: false },
        { id: 'c', text: 'Users can opt-out but it requires a fee', isCorrect: false },
      ],
    }
  ];
  const [showScore, setShowScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [score, setScore] = useState(0);
  const [showPolicyQuestions, setShowPolicyQuestions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

 
  const handleAnswerSelect = (questionId, answerId, isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    //This line updates the selectedAnswers state by spreading the previous state to retain all previously selected answers and then adding or updating the entry for the current question with the selected answer ID.
    setSelectedAnswers(prevSelected => ({
      ...prevSelected,
      [questionId]: answerId,
    }));
    

    //This logic advances the quiz to the next question, transitions from initial questions to policy questions when the former are completed, and shows the score after all policy questions are answered.
    const nextIndex = currentQuestionIndex + 1;
    if (!showPolicyQuestions && nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else if (!showPolicyQuestions && nextIndex >= questions.length) {
      setShowPolicyQuestions(true);
      setCurrentQuestionIndex(0); // Start policy questions
    } else if (showPolicyQuestions && nextIndex < policyQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else if (showPolicyQuestions && nextIndex >= policyQuestions.length) {
      setShowScore(true); // Show score after last policy question
    }
  };


  //The handleStartLevel function initializes the game level by resetting the quiz state, including hiding the introduction, setting the current question index and score to zero, and clearing any selected answers.
  const handleStartLevel = () => {
    setShowIntro(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setShowPolicyQuestions(false);
    setSelectedAnswers({});
  };


  // going to level page after game is done
  const navigateToLevelPage = () => {
    router.push("/levels"); 
  };


  return (
    
    <Layout>
      <div className={styles.container}>
        {showIntro && (
          <div className={styles.introMessage}>
            <img src="/policy.jpeg" alt="Cybersecurity" style={{ maxWidth: '100%', borderRadius: '15px', margin: '0 auto 20px' }}/>
            <p>Embark on a journey through the realms of cybersecurity. Ready to test your knowledge and secure the digital frontier?</p>
            <button onClick={handleStartLevel} className={styles.button}>Begin Adventure</button>
          </div>
        )}

        {showScore && (
          <div>
            <p>Your Score: {score} / {(questions.length + policyQuestions.length)}</p>
            <button onClick={navigateToLevelPage} className={styles.button}>Return to Home</button>
          </div>
        )}

        {!showIntro && !showScore && (
          <>
            {showPolicyQuestions ? (
              <div className={styles.questionContainer}>
                <img src="/policylast7q.webp" alt="Digital Privacy and Cybersecurity Infographic" className={styles.infographicImage} />
                <div className={styles.policyText}>
                  <pre>{policyText}</pre>
                </div>
                {policyQuestions.map((question, index) => (
                  <div key={question.id}>
                    <h2>{question.text}</h2>
                    {question.answers.map((answer) => (
                      <button
                        key={answer.id}
                        onClick={() => handleAnswerSelect(question.id, answer.id, answer.isCorrect)}
                        className={`${styles.button} ${selectedAnswers[question.id] === answer.id ? styles.selected : ''}`}
                        >
                        {answer.text}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.questionContainer}>
                <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
                <img src={questions[currentQuestionIndex].image} alt="Question scenario" className={styles.scenarioImage} />
                <div>
                  <h1>Scenario {currentQuestionIndex + 1}</h1>
                  <p>{questions[currentQuestionIndex].situation}</p>
                  <div>{questions[currentQuestionIndex].text}</div>
                  <div className={styles.answers}>
                    {questions[currentQuestionIndex].answers.map((answer) => (
                      <button
                        key={answer.id}
                        onClick={() => handleAnswerSelect(questions[currentQuestionIndex].id, answer.id, answer.isCorrect)}
                        className={`${styles.button} ${selectedAnswers[questions[currentQuestionIndex].id] === answer.id ? 'selected' : ''}`}
                      >
                        {answer.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default BasicPolicy;