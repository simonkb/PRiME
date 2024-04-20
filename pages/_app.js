import { Fragment, useEffect } from "react";
import Head from "next/head";
import './global.css'; 
import { useRouter } from "next/router";
import { auth } from "../config/firebaseConfig";
import dotenv from 'dotenv';
dotenv.config();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = auth.currentUser;
    if (isAuthenticated) {
      router.push("/home");
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <title>PRiME</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
