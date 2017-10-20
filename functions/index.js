const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.sanitize = functions.database
    .ref('/rooms/{roomId}/questions/{questionId}/question')
    .onWrite(event => {
        const question = event.data.val();
        if(question.sanitized || false) return;
        console.log(`Sanitizing question ${event.params.questionId}`);
        console.log(question);
        question.sanitized = true;
        question.text = sanitize(question.text);
        return event.data.ref.set(question);
});

sanitize = s => {
    let sanitatizeText = s;
    sanitatizeText = sanitatizeText.replace(/\bstupid\b/ig, "great");
    return sanitatizeText;
}