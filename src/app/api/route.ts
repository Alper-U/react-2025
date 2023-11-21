// import firestore from "@/lib/firebase-admin";

export async function GET() {
  // const sitesRef = firestore.collection("sites");
  // const doc = await sitesRef.get();
  // if (!doc.exists) {
  //   console.log("No such document!");
  // } else {
  //   console.log("Document data:", doc.data());
  //   return Response.json(doc.data());
  // }

  return Response.json({ nextjs: true });
}
