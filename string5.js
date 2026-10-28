/*
Given a string s, check if it can be constructed by taking a 
substring of it and appending multiple copies of the substring together.
*/



function repeatedSubstringPattern(s) {
  const n = s.length;

  for (let len = 1; len <= n / 2; len++) {
    if (n % len === 0) {
      const s1 = s.substring(0, len);   // the piece
      let news = "";                    // reset each time

      for (let i = 1; i <= n / len; i++) {
        news = news + s1;               // add the piece n/len times
      }

      if (news === s) return true;
    }
  }

  return false;
}