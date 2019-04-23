// function submitCreateAccount() {
//     var displayName = document.querySelector("entry-displayname");
//     var email = document.querySelector("#entry-email");
//     var password = document.querySelector("#entry-password");

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