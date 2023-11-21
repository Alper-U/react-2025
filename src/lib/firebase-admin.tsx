import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert(require("src/lib/firebase-private.json")),
});

export default admin.firestore;
