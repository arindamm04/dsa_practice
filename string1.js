/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
*/


function arrayStringsAreEqual(word1, word2) {
  let w1 = 0, c1 = 0; // position in word1
  let w2 = 0, c2 = 0; // position in word2

  while (w1 < word1.length && w2 < word2.length) {
    // compare current characters
    if (word1[w1][c1] !== word2[w2][c2]) return false;

    // move to the next character in both
    c1++;
    c2++;

    // reached end of current word? jump to next word
    if (c1 === word1[w1].length) { w1++; c1 = 0; }
    if (c2 === word2[w2].length) { w2++; c2 = 0; }
  }

  // true only if both finished at the same time
  return w1 === word1.length && w2 === word2.length;
}

const word1 = ["ab", "c"]
const word2 = ["e", "bc"]

const k = arrayStringsAreEqual(word1, word2)
console.log(k)