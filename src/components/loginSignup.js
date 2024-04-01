import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../../config/firebaseConfig";
import styles from "./loginSignup.module.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
const LoginSignup = () => {
  const [isLoginActive, setLoginActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const toggleView = () => {
    setLoginActive((prev) => !prev);
  };
  const handleLogin = async () => {
    // Check if email is provided
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Check if password is provided
    if (!password) {
      alert("Please enter your password");
      return;
    }

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error) {
      // Handle different error scenarios
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found. Please sign up first.");
          break;
        case "auth/wrong-password":
          alert("Incorrect password. Please try again.");
          break;
        case "auth/network-request-failed":
          alert(
            "No internet connection. Please check your network connection."
          );
          break;
        default:
          alert("An error occurred. Please try again later.");
          console.error("Error signing in:", error.message);
      }
    }
  };

  const handleSignup = async () => {
    // Check if email is provided
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Check if password is provided
    if (!password) {
      alert("Please enter your password");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Sign up with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error) {
      // Handle different error scenarios
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email is already in use. Please sign in instead.");
          break;
        case "auth/network-request-failed":
          alert(
            "No internet connection. Please check your network connection."
          );
          break;
        default:
          alert("An error occurred. Please try again later.");
          console.error("Error signing up:", error.message);
      }
    }
  };

  const handleForgetPassword = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Please check your email.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Handle different error codes and display appropriate messages
        switch (errorCode) {
          case "auth/invalid-email":
            alert("Invalid email address. Please enter a valid email.");
            break;
          case "auth/user-not-found":
            alert("No user found with this email address. Please sign up.");
            break;
          default:
            alert(errorMessage);
        }
      });
  };

  return (
    <section className={styles.gradientForm}>
      <h1>
        <i>Join us now!</i>
      </h1>
      <div className={`container py-5 h-100 ${styles.container}`}>
        <div className="row h-100">
          <div className={`col-md-6 ${styles.formContainer}`}>
            <div className={`card ${styles.card}`}>
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center mb-4" style={{ color: "white" }}>
                  <h2>{isLoginActive ? "Login" : "Sign Up"}</h2>
                </div>
                {isLoginActive ? (
                  <form>
                    {/* Email input */}
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`form-control ${styles.formControl}`}
                        placeholder="Email address"
                      />
                    </div>
                    {/* Password input */}
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`form-control ${styles.formControl}`}
                        placeholder="Password"
                      />
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className={`btn btn-primary btn-block fa-lg ${styles.gradientCustom2} mb-3`}
                        type="button"
                        onClick={() => {
                          handleLogin();
                        }}
                      >
                        Log in
                      </button>
                      <a
                        className="text-primary"
                        onClick={() => {
                          handleForgetPassword();
                        }}
                      >
                        Forgot password?
                      </a>
                    </div>

                    <div
                      className={`d-flex align-items-center justify-content-center pb-4 ${styles.createButtonContainer}`}
                    >
                      <p className={`mb-0 me-2 ${styles.dontHaveAccount}`}>
                        Don't have an account?
                      </p>
                      <button
                        type="button"
                        className={`btn btn-outline-danger ${styles.createButton}`}
                        onClick={toggleView}
                      >
                        Create new
                      </button>
                    </div>
                  </form>
                ) : (
                  // Sign Up Form
                  <form>
                    {/* Email input */}
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`form-control ${styles.formControl}`}
                        placeholder="Email address"
                      />
                    </div>

                    {/* Password input */}
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`form-control ${styles.formControl}`}
                        placeholder="Password"
                      />
                    </div>

                    {/* Confirm Password input */}
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`form-control ${styles.formControl}`}
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className={`btn btn-primary btn-block fa-lg ${styles.gradientCustom2} mb-3`}
                        type="button"
                        onClick={() => {
                          handleSignup();
                        }}
                      >
                        Register
                      </button>
                      <p className={`mb-0 me-2 ${styles.alreadyHaveAccount}`}>
                        Already have an account?
                      </p>
                      <br></br>
                      <button
                        type="button"
                        className={`btn btn-outline-danger ${styles.createButton}`}
                        onClick={toggleView}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div
            className={`col-md-6 d-flex align-items-center justify-content-center ${styles.infoContainer}`}
          >
            <div
              className={`text-white px-3 py-4 p-md-5 mx-md-4 ${styles.moreThanCompany}`}
            >
              <h4 className="mb-4">We are more than just a game</h4>
              <p className="small mb-0">
                We are providing diverse solution to cybersecurity knowledge gap
                and its consequences in the sustainability of businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
