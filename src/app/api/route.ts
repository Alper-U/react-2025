// import firestore from "@/lib/firebase-admin";
import { doc, collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export async function GET() {
  const docSnap = await getDocs(collection(firestore, "sites"));
  let sites: object[] = [];
  docSnap.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return Response.json({ sites });
}
