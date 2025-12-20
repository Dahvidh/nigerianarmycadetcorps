// Firebase setup (firebase.js)
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQdCEm8OSn_zLCOT9keK0orM1P6mNp9Ww",

  authDomain: "nacc-ad395.firebaseapp.com",

  projectId: "nacc-ad395",

  storageBucket: "nacc-ad395.firebasestorage.app",

  messagingSenderId: "32288857607",

  appId: "1:32288857607:web:ec07e3f575f4bbaec554a2",

  measurementId: "G-W8RHKP1PGW"


};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Signup and Save Officer Data
export const registerOfficer = async (email, password, officerData) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(db, "officers", user.uid), {
    ...officerData,
    uid: user.uid,
    email: user.email,
    role: "officer",
    createdAt: new Date()
  });
  return user;
};

// Login
export const loginOfficer = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Logout
export const logoutOfficer = async () => {
  await signOut(auth);
};

// Get Officer Role (for Role-Based Access)
export const getOfficerRole = async (uid) => {
  const docRef = doc(db, "officers", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().role;
  } else {
    throw new Error("Officer not found");
  }
};
