const functions = require("firebase-functions");
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDZuh6ZPgk0tfkC0HknxlwElsQ1Bx2LbD4",
//   authDomain: "rouq-balak.firebaseapp.com",
//   databaseURL: "https://rouq-balak-default-rtdb.firebaseio.com",
//   projectId: "rouq-balak",
//   storageBucket: "rouq-balak.appspot.com",
//   messagingSenderId: "915497304732",
//   appId: "1:915497304732:web:5d1059887bd2bc87ba2359",
//   measurementId: "G-BWNR66KBH6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
