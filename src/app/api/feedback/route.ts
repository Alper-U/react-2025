// import firestore from "@/lib/firebase-admin";
import { getAllFeedback } from "@/lib/firestore-read";

export async function GET(request: Request) {
  const siteId = await request.json();
  // let feedback = await getAllFeedback(siteId);

  return Response.json({ siteId });
}
