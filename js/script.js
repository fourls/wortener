"use strict";

// The magic phrase shortening function
function shortenPhrase(inPhrase) {
  var outPhrase = "";

  inPhrase = inPhrase.trim();

  return outPhrase;
}

// Called when the user types in a new in phrase value
function onInPhraseChange() {
  var inPhrase = document.getElementById("in-phrase").value;
  var outPhrase = shortenPhrase(inPhrase);

  document.getElementById("out-phrase").value = outPhrase;
}

// Initialisation function
function init() {
  var inPhraseInput = document.getElementById("in-phrase");

  inPhraseInput.addEventListener("change", onInPhraseChange);
}

window.addEventListener("load",init);