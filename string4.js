/*
Given two strings needle and haystack,
return the index of the first occurrence of needle in haystack,
or -1 if needle is not part of haystack.
*/



function strStr(haystack, needle) {
  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    let found = true;

    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;   // mismatch, this start position fails
        break;           // stop checking this position
      }
    }

    if (found) return i; // no mismatch found, so it's a match
  }

  return -1;
}