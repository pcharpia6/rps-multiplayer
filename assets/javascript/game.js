var config = {
    apiKey: "AIzaSyACRvX97cxEarRcZdnWENxquUL5u6TJlGw",
    authDomain: "rock-paper-scissors-fb335.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-fb335.firebaseio.com",
    projectId: "rock-paper-scissors-fb335",
    storageBucket: "rock-paper-scissors-fb335.appspot.com",
    messagingSenderId: "693363059042"
  };
firebase.initializeApp(config);

// function submitCreateName() {
//     var displayName = document.querySelector("entry-displayname");

//     firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//     .then(function(user) {
//         //add the displayName
//         user.updateProfile({displayName: displayName.value});
//     });
// }

// function signInWithEmailandPassword() {
//     var email = document.querySelector("#email");
//     var password = document.querySelector("#password");

//     firebase.auth().signInWithEmailandPassword(email.value, password.value);
// }

// function authStateChangeListener(user) {
//     //signin
//     if (user) {
//         Chat.onlogin();
//         Game.onlogin();
//     } else { //signout
//         window.location.reload();
//     }
// }

// $("#login").on("click", function() {

// })

// //setting up open/closed games
// var STATE = {OPEN: 1, JOINED: 2, CHOOSE_RPS: 3, RPS_PICKED: 4, COMPLETE: 5};

//ref call inside or outside of the function?
// ref = firebase.database().ref("/games");

// function createGame() {
//     var user = firebase.auth().currentUser;
//     var currentGame = {
//         creator: {uid: user.uid, displayName: user.displayName},
//         state: STATE.OPEN
//     };
//     ref.push().set(currentGame);
// }

// function joinGame(key) {
//     var user = firebase.auth().currentUser;
//     var gameRef = ref.child(key);
//     gameRef.transaction(function(game) {
//         if (!game.joiner) {
//             game.state = STATE.JOINED;
//             game.joiner = {uid: user.uid, displayName: user.displayName}
//         }
//         return game;
//     })
// }

// function watchGame(key) {
//     var gameRef = ref.child(key);
//     gameRef.on("value", function(snapshot) {
//         var game = snapshot.val();
//         switch (game.state) {
//             case STATE.JOINED: joinedGame(gameRef, game); break;
//             case STATE.CHOOSE_RPS: pickRPS(game); break;
//             case STATE.RPS_PICKED: determineWinner(gameRef, game); break;
//             case STATE.COMPLETE: showWinner(game); break;
//         }
//     })
// }

// firebase.auth().onAuthStateChanged(authStateChangeListener) 
