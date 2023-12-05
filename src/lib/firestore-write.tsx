import { firestore } from "./firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

export async function createUser(uid: string, user: Object) {
  await setDoc(doc(firestore, "users", uid), user, { merge: true });
}

export async function createSite(addSiteInfo: createSiteInfo) {
  await addDoc(collection(firestore, "sites"), addSiteInfo);
}
