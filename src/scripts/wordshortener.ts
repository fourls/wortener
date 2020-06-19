// The magic phrase shortening function
function shortenPhrase(inPhrase: string): string {
  inPhrase = inPhrase.trim().toLowerCase();

  // If the phrase is empty, return an empty out phrase
  if(inPhrase == "") return "";
  
  // Split the phrase into an array of words
  const inWords = inPhrase.split(" ");

  // If there's one word, return just that word, and if there are none return nothing
  if(inWords.length < 1) return "";
  if(inWords.length < 2) return inWords[0];

  // Get the first and last word in the phrase
  const startWord = inWords[0];
  const endWord = inWords[inWords.length-1];
  
  const vowels = ["a","e","i","o","u","y"];

  // Get the starting prefix
  let prefix = "";
  for(let i = 1; i < startWord.length; i++) {
    // If the current character is a vowel, and the last character was a consonant, discard all characters including and after this character
    if(vowels.indexOf(startWord.charAt(i)) > -1 && vowels.indexOf(startWord.charAt(i-1))) {
      prefix = startWord.substring(0,i);
      break;
    }
  }

  // Get the ending suffix
  let suffix = "";
  for(let i = 0; i < endWord.length; i++) {
    // If the current character is a vowel, discard all characters before this character
    if(vowels.indexOf(endWord.charAt(i)) > -1) {
      suffix = endWord.substring(i);
      break;
    }
  }

  // Combine!
  return prefix + suffix;
}