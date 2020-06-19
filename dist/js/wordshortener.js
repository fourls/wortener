"use strict";
// The magic phrase shortening function
function shortenPhrase(inPhrase) {
    inPhrase = inPhrase.trim().toLowerCase();
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
    // Get the first and last word in the phrase
    var startWord = inWords[0];
    var endWord = inWords[inWords.length - 1];
    var vowels = ["a", "e", "i", "o", "u", "y"];
    // Get the starting prefix
    var prefix = "";
    for (var i = 1; i < startWord.length; i++) {
        // If the current character is a vowel, and the last character was a consonant, discard all characters including and after this character
        if (vowels.indexOf(startWord.charAt(i)) > -1 && vowels.indexOf(startWord.charAt(i - 1))) {
            prefix = startWord.substring(0, i);
            break;
        }
    }
    // Get the ending suffix
    var suffix = "";
    for (var i = 0; i < endWord.length; i++) {
        // If the current character is a vowel, discard all characters before this character
        if (vowels.indexOf(endWord.charAt(i)) > -1) {
            suffix = endWord.substring(i);
            break;
        }
    }
    // Combine!
    return prefix + suffix;
}
