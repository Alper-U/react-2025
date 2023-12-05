import { useAuth } from "./auth";
import { firestore } from "./firebase";
import { getDocs, collection, where, query } from "firebase/firestore";

export async function getAllFeedback(siteId: string) {
  const q = query(
    collection(firestore, "feedback"),
    where("siteId", "==", siteId)
  );
  const querySnapshot = await getDocs(q);

  let feedback: object[] = [];
  querySnapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return feedback;
}

export async function getSites() {
  const auth = useAuth();
  const querySnapshot = await getDocs(collection(firestore, "sites"));
  // console.log(auth.user);
  // const q = query(
  //   collection(firestore, "sites"),
  //   where("authorId", "==", auth.user.uid)
  // );
  // const querySnapshot = await getDocs(q);

  let sites: object[] = [];
  querySnapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return Response.json({ sites });
}
