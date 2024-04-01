import React, { useEffect, useState } from "react";
import Layout from "./layout";
import styles from "./profile.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useRouter } from "next/router";
import WithAuthProtection from "../../config/withAuthProtection";

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
      const mockUserData = {
        name: "Yousef",
        email: "Yousef@hotmail.com",
        joinDate: "Feb 1, 2024",
      };
      setUserData(mockUserData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  // Wrap the profile content with a div that sets the full page's background color
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
            <button
              type="button"
              className={`btn btn-outline-danger`}
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    route.replace("/");
                  })
                  .catch((error) => {
                    // An error happened.
                    route.replace("/");
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
