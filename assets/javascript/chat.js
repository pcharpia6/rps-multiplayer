// ref = firebase.database().ref("/chat");

// function sendChatMessage() {
//     messageField = document.querySelector("#chat-message");

//     ref.push().set({
//         name: firebase.auth().currentUser.displayName,
//         message: messageField.value // val()?
//     })

//     ref.on("child_added", function(snapshot) {
//         var message = snapshot.val();
//         addChatMessage(message.name, message.message);
//     });
// }

// function addchatMessage() {
//     fill me in!
// }