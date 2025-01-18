/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //states
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  //google login
  const Google = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

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

  //google SignIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, Google);
  };

  //manage user profile
  const manageUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
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
    googleSignIn,
    manageUserProfile,
    logout,
    forgotPassword,
  };

  //manage onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // console.log("currentUser info", currentUser);
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token-t", res.data.token);
            setLoading(false);
          }
        });
      } else {
        // to do
        localStorage.removeItem("access-token-t");
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
