/*
Integer to Roman conversion
*/


function intToRoman(num) {
  const values  = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for (let i = 0; i < values.length; ) {   // no i++ here
    if (num >= values[i]) {
      result += symbols[i];   // value fits → use it
      num -= values[i];       // stay on the same i
    } else {
      i++;                    // doesn't fit → try the next smaller value
    }
  }

  return result;
}