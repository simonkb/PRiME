import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "./firebaseConfig";
const WithAuthProtection = (Component) => {
  const ProtectedPage = (props) => {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/"); // Redirect unauthenticated users to index page
        alert("Please sign up or login to your account.");
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Loading...</div>; // Show loading indicator while checking authentication status
    }

    return user ? <Component {...props} /> : null; // Render the protected component if user is authenticated
  };

  return ProtectedPage;
};

export default WithAuthProtection;
