import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDdsYYN_lN_98pRibmmKaALo72JairPOnA",
  authDomain: "prime-cd131.firebaseapp.com",
  projectId: "prime-cd131",
  storageBucket: "prime-cd131.appspot.com",
  messagingSenderId: "665224195882",
  appId: "1:665224195882:web:c16da57d406aca50333853",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export { auth, db, storage, API_KEY, API_URL, useAuth };
