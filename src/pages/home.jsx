import React from "react";
import Layout from "./layout";
import HomeBackground from "../components/home_background";
import WithAuthProtection from "../../config/withAuthProtection";
const Home = () => {
  return (
    <Layout>
      <HomeBackground
        top="0"
        left="0"
        images={["/background-1@2x.png", "/346520-1@2x.png", "/cta@2x.png"]}
      />
    </Layout>
  );
};

export default WithAuthProtection(Home);
