import React, { useEffect, useState } from 'react'; // Import React
import Layout from "./layout"; // Ensure correct path if needed
import styles from './profile.module.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    joinDate: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      // Mocked user data
      const mockUserData = {
        name: "Yousef",
        email: "Yousef@hotmail.com",
        joinDate: "fed 1, 2024"
      };

      setUserData(mockUserData);
      setLoading(false); // Indicate loading is complete
    }, 1000); // Simulate fetch delay
  }, []);

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <div className={styles.profileContainer}>
        <h1 className={styles.profileHeader}>Your Profile</h1>
        <div className={styles.userInfo}>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Join Date:</strong> {userData.joinDate}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
