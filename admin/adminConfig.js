const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccountPath = "FILE_PATH";
console.log(serviceAccountPath);
admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath))
});

const db = admin.firestore();

module.exports = { db };
