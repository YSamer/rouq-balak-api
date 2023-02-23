var express = require('express');
var bodyParser = require('body-parser')

var firebase = require('firebase/app');
var { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8081;


const firebaseConfig = {
  apiKey: "AIzaSyDZuh6ZPgk0tfkC0HknxlwElsQ1Bx2LbD4",
  authDomain: "rouq-balak.firebaseapp.com",
  databaseURL: "https://rouq-balak-default-rtdb.firebaseio.com",
  projectId: "rouq-balak",
  storageBucket: "rouq-balak.appspot.com",
  messagingSenderId: "915497304732",
  appId: "1:915497304732:web:5d1059887bd2bc87ba2359",
  measurementId: "G-BWNR66KBH6"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = getAuth(fire);

app.get('/signup', function (req, res) {
   createUserWithEmailAndPassword(auth, 'ysamer2525@gmail.com', 'Yahya@2525').then((userCredential) => {
      var user = userCredential.user;
      res.send('1');
      res.send(user.uid);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      res.send('2');
      // res.send(errorCode);
      // res.send(errorMessage);
      // res.json(errorMessage)
    });
})

app.post('/signup', (req, res) => {
   let email = req.body.email;
   let password = req.body.password;
   createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      var user = userCredential.user;
      res.send('1');
      console.log(user.uid);
    })
    .catch((error) => {
      console.log(error);
      res.send('2');
    });
})

app.post('/login', (req, res) => {
   let email = req.body.email;
   let password = req.body.password;
   signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      var user = userCredential.user;
      res.send('1');
      console.log(user.uid);
    })
    .catch((error) => {
      console.log(error);
      res.send('2');
    });
})

var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})