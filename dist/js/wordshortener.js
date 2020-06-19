"use strict";
// The magic phrase shortening function
function shortenPhrase(inPhrase) {
    inPhrase = inPhrase.trim();
    // If the phrase is empty, return an empty out phrase
    if (inPhrase == "")
        return "";
    // Split the phrase into an array of words
    var inWords = inPhrase.split(" ");
    // If there's one word, return just that word, and if there are none return nothing
    if (inWords.length < 1)
        return "";
    if (inWords.length < 2)
        return inWords[0];
    var startWord = inWords[0];
    var endWord = inWords[inWords.length - 1];
    var outPhrase = "";
    return outPhrase;
}
