import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid: string, user: Object) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...user }, { merge: true });
}

export function createSite(siteName: string, siteUrl: string) {
  return firestore.collection("sites").add({ siteName, siteUrl });
}
