// import firestore from "@/lib/firebase-admin";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

export async function GET() {
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
