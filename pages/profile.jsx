import React, { useEffect, useState } from "react";
import Layout from "./layout";
import styles from "./profile.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useRouter } from "next/router";
import WithAuthProtection from "../config/withAuthProtection";
import Loading from "../src/components/loading";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    joinDate: "",
  });
  const [loading, setLoading] = useState(true);
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const userData = {
        name: auth.currentUser.email.split("@")[0],
        email: auth.currentUser.email,
        joinDate: auth.currentUser.metadata.creationTime,
        points: 2500,
      };
      setUserData(userData);
      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }
  return (
    <Layout>
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        {" "}
        {/* Inline style for full-page background */}
        <div className={styles.profileContainer}>
          <h1 className={styles.profileHeader}>Your Profile</h1>
          <div className={styles.userInfo}>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Join Date:</strong> {userData.joinDate}
            </p>
            <p>
              <strong>Points:</strong> {userData.points}
            </p>
            <button
              type="button"
              className={`btn btn-outline-danger`}
              onClick={() => {
                route.replace("/");
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WithAuthProtection(Profile);
