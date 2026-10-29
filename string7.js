/*
Integer to Roman conversion
*/


function intToRoman(num) {
  const values  = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];   // add the symbol
      num -= values[i];       // subtract its value
    }
  }

  return result;
}