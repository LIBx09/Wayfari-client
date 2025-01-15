/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config.js ";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //states
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //manage user profile
  const manageUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.createUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //logout
  const logout = () => {
    setLoading(true);
    signOut(auth);
  };

  //forgot password
  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    manageUserProfile,
    logout,
    forgotPassword,
  };

  //manage onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("currentUser info", currentUser);
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
