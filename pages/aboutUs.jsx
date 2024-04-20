import React from "react";
import Layout from "./layout";
import styles from "./aboutUs.module.css";
const teamMembers = [
  {
    id: 1,
    name: "Yousef F.",
    role: "Cybersecurity Develpoer",
    description: "ADD HERE",
    photo: "/Unknown_person.jpg", 
  },
  {
    id: 2,
    name: "Simon D.",
    role: "Develpoer & Team leader",
    description: "ADD HERE",
    photo: "/Unknown_person.jpg",
  },
  {
    id: 3,
    name: "Winner A.",
    role: "Lead Developer",
    description: "ADD HERE",
    photo: "/Unknown_person.jpg",
  },
  {
    id: 4,
    name: "Yousef H.",
    role: "Cybersecurity Develpoer",
    description: "ADD HERE",
    photo: "/Unknown_person.jpg",
  },
];
const AboutUs = () => {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h1 className={styles.heading}>About Us</h1>

        <section className={styles.aboutSection}>
          <h2>Our Story</h2>
          <p>
            PRiME was conceived in the halls of UAE University, born from a
            shared vision among four senior students to make cybersecurity
            knowledge accessible and engaging for everyone. Recognizing the
            increasing importance of digital security in our interconnected
            world, we embarked on a journey to develop an educational platform
            that could demystify complex cybersecurity concepts through
            interactive learning and gamification. Our mission is to empower
            individuals and organizations with the tools and knowledge needed to
            safeguard their digital assets against ever-evolving cyber threats.
            Through PRiME, we aim to create a culture of cybersecurity awareness
            that transcends traditional classroom learning, making it a part of
            everyday life. As we continue to grow and innovate, we remain
            committed to enhancing digital safety and promoting informed cyber
            practices within the UAE and beyond.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>Careers</h2>
          <p>
            Interested in joining our team? we aren&apos;t hiring right now, but
            maybe in the future.
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h2>Team</h2>
          <p>
            Meet the people behind our company. Our dedicated team is the
            driving force behind our success.
          </p>
          <div className={styles.teamMembers}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamMember}>
                <img
                  src={member.photo}
                  alt={`${member.name}`}
                  className={styles.memberPhoto}
                />
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
