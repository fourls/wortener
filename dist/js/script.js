"use strict";
// Called when the user types in a new in phrase value
function onInPhraseChange() {
    var inPhraseInput = document.getElementById("in-phrase");
    // Lowercase the phrase
    inPhraseInput.value = inPhraseInput.value.toLowerCase();
    // Calculate the out phrase from the in phrase
    var outPhrase = shortenPhrase(inPhraseInput.value);
    // Display the out phrase
    document.getElementById("out-phrase").value = outPhrase;
}
// Initialisation function
function init() {
    var inPhraseInput = document.getElementById("in-phrase");
    inPhraseInput.addEventListener("input", onInPhraseChange);
    // Automatically do phrase for existing value
    onInPhraseChange();
}
window.addEventListener("load", init);
