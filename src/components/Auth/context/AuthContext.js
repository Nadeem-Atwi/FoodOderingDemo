import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setloading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password); // just change link here to another api rest of app works fine
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }

  function resetpassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function userStatus() {
    if (currentUser !== null) {
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetpassword,
    userStatus,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
