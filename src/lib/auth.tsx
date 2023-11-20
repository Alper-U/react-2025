'use client';

import React, { useState, useEffect, useContext, createContext, PropsWithChildren } from 'react';
import firebase from './firebase';
import { createUser } from './firestore';

const authContext = createContext({});

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
      const user = formatUser(rawUser.user);
      console.log(rawUser)
      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signInWithGithub = async () => {
    return await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response));
  };

  const signOut = async () => {
    await firebase
      .auth()
      .signOut();
    setUser(false);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut
  };
}

const formatUser = (user: any) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0]['providerId'],
    photoUrl: user.photoURL
  };
};