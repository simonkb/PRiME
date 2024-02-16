import { Fragment, useEffect } from "react";
import Head from "next/head";
import "./global.css";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Your authentication logic goes here
    const isAuthenticated = false;/* Check if the user is authenticated */ false;

    if (isAuthenticated) {
      // If authenticated, redirect to the home page
      router.push("/home");
    }
    // If not authenticated, stay on the current page
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
