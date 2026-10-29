/*
Integer to Roman conversion
*/


function intToRoman(num) {
  const values  = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    const count = Math.floor(num / values[i]);   // how many times it fits

    if (count > 0) {
      result += symbols[i].repeat(count);        // add the symbol count times
      num = num % values[i];                     // keep only the remainder
    }
  }

  return result;
}