import React, { useState } from "react";
import Layout from "../layout";
import styles from "./passwordEnigma.module.css";
import { useRouter } from "next/router";
import WithAuthProtection from "../../../config/withAuthProtection";

const PasswordEnigma = () => {
  const router = useRouter();
  const [currentStage, setCurrentStage] = useState(0);
  const [password, setPassword] = useState("");
  const [passwordFeedback, setPasswordFeedback] = useState([]);
  const stages = [
    "welcome",
    "lesson",
    "signup",
    "feedback",
    "creativePasswordAdvice",
    "finish",
  ];

  const analyzePassword = (password) => {
    const tests = [
      { regex: /[a-z]/, message: "Include at least one lowercase letter" },
      { regex: /[A-Z]/, message: "Include at least one uppercase letter" },
      { regex: /[0-9]/, message: "Include at least one number" },
      {
        regex: /[!@#$%^&*]/,
        message: "Include at least one special character",
      },
      { regex: /.{8,}/, message: "Use at least 8 characters" },
    ];

    return tests.reduce((acc, test) => {
      if (!test.regex.test(password)) acc.push(test.message);
      return acc;
    }, []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = analyzePassword(password);
    setPasswordFeedback(
      feedback.length > 0 ? feedback : ["Your password is strong!"]
    );
    setCurrentStage(stages.indexOf("feedback"));
  };
  const handleTryAgain = () => {
    setPassword(""); // Reset the password
    setPasswordFeedback([]); // Clear previous feedback
    setCurrentStage(stages.indexOf("signup")); // Navigate back to the signup stage
  };

  const handleNextStage = () => {
    if (passwordFeedback.includes("Your password is strong!")) {
      setCurrentStage(stages.indexOf("finish"));
    } else {
      setCurrentStage(stages.indexOf("creativePasswordAdvice"));
    }
  };

  const renderStage = () => {
    switch (stages[currentStage]) {
      case "welcome":
        return (
          <div className={styles.introMessage}>
            <img
              src="/The_Password_Enigma.webp"
              alt="Cybersecurity"
              style={{
                maxWidth: "100%",
                borderRadius: "15px",
                margin: "20px auto",
              }}
            />
            <p>
              Welcome to the Password Enigma. Ready to embark on your
              cybersecurity journey?
            </p>
            <button
              onClick={() => setCurrentStage(stages.indexOf("lesson"))}
              className={styles.button}
            >
              Begin
            </button>
          </div>
        );
      case "lesson":
        return (
          <div className={styles.lesson}>
            <h2>Understanding Password Security</h2>
            <p>
              Learn the essentials of creating a strong password that's hard to
              crack.
            </p>
            <button
              onClick={() => setCurrentStage(stages.indexOf("signup"))}
              className={styles.button}
            >
              Next
            </button>
          </div>
        );
      case "signup":
        return (
          <>
            <h2>Create Your Account</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="password"
                className={styles.input}
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className={styles.button}>
                Sign Up
              </button>
            </form>
          </>
        );
      case "feedback":
        return (
          <div className={styles.feedback}>
            <h2>Password Feedback</h2>
            <ul>
              {passwordFeedback.map((feedback, index) => (
                <li key={index}>{feedback}</li>
              ))}
            </ul>
            <button onClick={handleNextStage} className={styles.button}>
              {passwordFeedback.includes("Your password is strong!")
                ? "Proceed"
                : "Learn How to Improve"}
            </button>
          </div>
        );
      case "creativePasswordAdvice":
        return (
          <div className={styles.creativeAdvice}>
            <h2>Creative Password Generation</h2>
            <p>
              Creating a memorable yet strong password can be fun. Here's a
              method to make strong passwords that are easier to remember:
            </p>
            <ul>
              <li>Think of a sentence or phrase that's meaningful to you.</li>
              <li>Use the first letter of each word in your sentence.</li>
              <li>
                Mix in numbers and special characters. For example, 'E' becomes
                '3', and 'I' becomes '!'.
              </li>
              <li>
                Capitalize letters in a non-standard pattern to add complexity.
              </li>
            </ul>
            <p>
              Example: "My dog Baxter eats 2 bowls every day!" could become
              "MdB*e2bed!"
            </p>
            <button onClick={handleTryAgain} className={styles.button}>
              Try Creating a Strong Password Again
            </button>
          </div>
        );
      case "finish":
        return (
          <div className={styles.finish}>
            <h2>You're Ready!</h2>
            <p>
              Congratulations! You've successfully created a strong password and
              are now better equipped to secure your digital life.
            </p>
            {passwordFeedback.includes("Your password is strong!") && (
              <button
                onClick={() => router.push("/levels")}
                className={styles.button}
              >
                Explore More Levels
              </button>
            )}
          </div>
        );
      default:
        return <div>Oops! Something went wrong. Please refresh the page.</div>;
    }
  };

  return (
    <Layout>
      <div className={styles.container}>{renderStage()}</div>
    </Layout>
  );
};

export default WithAuthProtection(PasswordEnigma);
