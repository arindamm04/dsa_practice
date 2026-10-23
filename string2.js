/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/



function checkIfPangram(sentence) {
  const seen = new Array(26).fill(false);

  // Step 1: tick the box for each letter
  for (let i = 0; i < sentence.length; i++) {
    const index = sentence.charCodeAt(i) - 97;
    seen[index] = true;
  }

  // Step 2: check every box using if/else
  for (let i = 0; i < 26; i++) {
    if (seen[i] === false) {
      return false;   // found an empty box, so a letter is missing
    }
  }

  return true;        // no empty box found, so all letters are present
}