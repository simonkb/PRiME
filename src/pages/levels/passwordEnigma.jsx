import React, { useState } from 'react';
import Layout from '../layout'; // Adjust this path to your project's structure
import styles from './passwordEnigma.module.css';
import { useRouter } from 'next/router';

const PasswordEnigma = () => {
    const router = useRouter();
    const [stage, setStage] = useState('welcome');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const email = "testingPass@test.com";

    const handleStartLevel = () => setStage('signup');

    const analyzePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowModal(true);
    };
//sdjhs
    const handleModalClose = () => {
      setShowModal(false);
      setTimeout(() => {
        if (attempt === 0 || !analyzePassword(password)) {
          setStage('bestPractices');
        } else {
          setStage('creativePasswordAdvice');
        }
        setAttempt(attempt + 1);
      }, 100);
    };

    const handleBestPracticesDone = () => {
      if (attempt < 2) {
        setStage('signup');
      } else {
        setStage('finish');
      }
    };

    const handleCreativePasswordDone = () => setStage('signup');

    const handleFinish = () => {
      router.push("/levels"); 
    };

    return (
        <Layout>
          <div className={styles.container}>
            {showModal && (
              <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
                <div className={styles.feedbackModal} onClick={(e) => e.stopPropagation()}>
                  <p>{analyzePassword(password) ? 'Your password is strong!' : 'Your password is weak, let’s improve it.'}</p>
                  <button onClick={handleModalClose} className={styles.button}>Proceed</button>
                </div>
              </div>
            )}
      
            {stage === 'welcome' && (
              <div className={styles.introMessage}>
                <img src="/The_Password_Enigma.webp" alt="Cybersecurity" style={{ maxWidth: '100%', borderRadius: '15px', margin: '20px auto' }}/>
                <p>Welcome to the Password Enigma. Ready to embark on your cybersecurity journey?</p>
                <button onClick={handleStartLevel} className={styles.button}>Begin</button>
              </div>
            )}
      
            {stage === 'signup' && (
              <>
                <h2>Create Your Account</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <input type="email" className={styles.input} value={email} readOnly />
                  <input type="password" className={styles.input} placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="submit" className={styles.button}>Sign Up</button>
                </form>
              </>
            )}
      
            {stage === 'bestPractices' && (
              <div className={styles.bestPractices}>
                <h2>Best Practices for Creating a Strong Password</h2>
                <p>Ensure your password includes a mix of letters (both uppercase and lowercase), numbers, and special characters. Aim for at least 8 characters in length. Avoid common words or phrases and never use personal information that can be easily guessed.</p>
                <button onClick={handleBestPracticesDone} className={styles.button}>Try Again</button>
              </div>
            )}
      
            {stage === 'creativePasswordAdvice' && (
              <div className={styles.creativeAdvice}>
                <h2>Creative Password Generation</h2>
                <p>Creativity in password creation helps you remember them while keeping your accounts secure. Here's how you can create a memorable yet strong password:</p>
                <p>Think of a sentence or a sequence of words that you can easily recall, and use the first letters of each word as your password. Intersperse this with numbers significant to you and symbols to add complexity.</p>
                <p>For instance, "My dog's birthday is January 3; he's a good boy!" could become "MdbiJ3;hagb!"</p>
                <button onClick={handleCreativePasswordDone} className={styles.button}>Try Another Password</button>
              </div>
            )}
      
            {stage === 'finish' && (
              <div className={styles.finish}>
                <h2>You're Ready!</h2>
                <p>You've learned how to create strong and creative passwords. Remember to keep them safe and unique for each account.</p>
                <button onClick={handleFinish} className={styles.button}>Back to Levels</button>
              </div>
            )}
          </div>
        </Layout>
      );
};

export default PasswordEnigma;