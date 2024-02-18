import { useState } from "react";
import styles from "./loginSignup.module.css";
import { useRouter } from "next/router";

const LoginSignup = () => {
  const [isLoginActive, setLoginActive] = useState(true);

  const toggleView = () => {
    setLoginActive((prev) => !prev);
  };
  const router = useRouter();
  const loginPressed = () => {
    router.push("/home");
  };

  return (
    <section className={styles.gradientForm}>
      <h1>
        <h1>  </h1>
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
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="email"
                        id="loginEmail"
                        className={`form-control ${styles.formControl}`}
                        placeholder="Email address"
                      />
                      <label
                        className={`form-label ${styles.formLabel}`}
                        htmlFor="loginEmail"
                      >
                        Email
                      </label>
                    </div>

                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="password"
                        id="loginPassword"
                        className={`form-control ${styles.formControl}`}
                        placeholder="Password"
                      />
                      <label
                        className={`form-label ${styles.formLabel}`}
                        htmlFor="loginPassword"
                      >
                        Password
                      </label>
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className={`btn btn-primary btn-block fa-lg ${styles.gradientCustom2} mb-3`}
                        type="button"
                        onClick={() => {
                          loginPressed();
                        }}
                      >
                        Log in
                      </button>
                      <a className="text-primary" href="#!">
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
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="email"
                        id="signupEmail"
                        className={`form-control ${styles.formControl}`}
                        placeholder="Email address"
                      />
                      <label
                        className={`form-label ${styles.formLabel}`}
                        htmlFor="signupEmail"
                      >
                        Email
                      </label>
                    </div>

                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="password"
                        id="signupPassword"
                        className={`form-control ${styles.formControl}`}
                        placeholder="Password"
                      />
                      <label
                        className={`form-label ${styles.formLabel}`}
                        htmlFor="signupPassword"
                      >
                        Password
                      </label>
                    </div>

                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input
                        type="password"
                        id="confirmPassword"
                        className={`form-control ${styles.formControl}`}
                        placeholder="Confirm Password"
                      />
                      <label
                        className={`form-label ${styles.formLabel}`}
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className={`btn btn-primary btn-block fa-lg ${styles.gradientCustom2} mb-3`}
                        type="button"
                      >
                        Register
                      </button>
                      <p className={`mb-0 me-2 ${styles.alreadyHaveAccount}`}>
                        Already have an account?
                      </p>
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
