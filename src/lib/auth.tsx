"use client";

import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";
import { firebase_auth } from "./firebase";
import { createUser } from "./firestore-write";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

const defaultValue: any = false;
const authContext = createContext(defaultValue);

export function AuthProvider({ children }: PropsWithChildren) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<any>();

  const handleUser = (rawUser: any) => {
    if (rawUser) {
      const formattedUser = formatUser(rawUser.user);
      createUser(formattedUser.uid, formattedUser);
      setUser(formattedUser);
      return formattedUser;
    } else {
      setUser(false);
      return false;
    }
  };

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(firebase_auth, provider).then((response) =>
      handleUser(response)
    );
  };

  const signOut = async () => {
    await firebase_auth.signOut();
    setUser(false);
  };

  useEffect(() => {
    const unsubscribe = firebase_auth.onAuthStateChanged((user) => {
      if (user) {
        const formattedUser = formatUser(user);
        setUser(formattedUser);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut,
  };
}

const formatUser = (user: any) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0]["providerId"],
    photoUrl: user.photoURL,
  };
};
