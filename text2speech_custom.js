/*
 * Check for browser support
 */
// var supportMsg = document.getElementById('msg');

// if ('speechSynthesis' in window) {
//     supportMsg.innerHTML = 'Your browser <strong>supports</strong> speech synthesis.';
// } else {
//     supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
//     supportMsg.classList.add('not-supported');
// }


// Get the 'speak' button
var button = document.getElementById('speak');

// Get the text input element.
var speechMsgInput = document.getElementById('speech-msg');

// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance.
    var msg = new SpeechSynthesisUtterance();

    // Set the text.
    msg.text = text;

    // Set the attributes.
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];

    // Queue this utterance.
    window.speechSynthesis.speak(msg);
}

// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener('click', function (e) {
    if (speechMsgInput.value.length > 0) {
        speak(speechMsgInput.value); // change text here
    }
});

// window.addEventListener("load", function (e) {
//     if (speechMsgInput.value.length > 0) {
//         speak(speechMsgInput.value); // change text here
//     }
// });
