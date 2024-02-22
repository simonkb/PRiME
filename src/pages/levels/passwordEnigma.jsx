// PasswordEnigma.jsx
import React, { useState } from 'react';
import Layout from '../layout';
import styles from './passwordEnigma.module.css';


const PasswordEnigma = () => {
    const [stage, setStage] = useState('welcome'); // Manage the display stages
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
  
    const handleStartLevel = () => {
      setStage('signup'); // Transition to the signup form
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const strength = analyzePassword(password);
      setFeedback(`Password is ${strength}`);
    };
  
    const analyzePassword = (password) => {
      const strongPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
      return strongPassword.test(password) ? 'Strong' : 'Weak';
    };
  
    return (
      <Layout>
        <div className={styles.container}>
          {stage === 'welcome' && (
            <div className={styles.introMessage}>
              <img src="/The_Password_Enigma.webp" alt="Cybersecurity" style={{ maxWidth: '100%', borderRadius: '15px', margin: '0 auto 20px' }}/>
              <p>Embark on a journey through the realms of cybersecurity. Ready to test your knowledge and secure the digital frontier?</p>
              <button onClick={handleStartLevel} className={styles.button}>Begin Adventure</button>
            </div>
          )}
  
          {stage === 'signup' && (
            <>
              <h2>Create Your Account</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="email" className={styles.input} placeholder="Email Address" required />
                <input type="password" className={styles.input} placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className={styles.button}>Sign Up</button>
              </form>
              {feedback && <div className={styles.feedback}>{feedback}</div>}
            </>
          )}
        </div>
      </Layout>
    );
  };
  
  export default PasswordEnigma;