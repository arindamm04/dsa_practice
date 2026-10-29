/*
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. 
Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

Note: The characters in the array beyond the returned length do not matter and should be ignored.
*/


function compress(chars) {
  let i = 0;       // write pointer
  let count = 1;   // size of the current group

  for (let j = 0; j < chars.length; j++) {
    if (j + 1 < chars.length && chars[j] === chars[j + 1]) {
      // same as next character → group continues
      count++;
    } else {
      // group ended → write the character
      chars[i] = chars[j];
      i++;

      // write the count only if it's more than 1
      if (count > 1) {
        const digits = String(count);
        for (let k = 0; k < digits.length; k++) {
          chars[i] = digits[k];
          i++;
        }
      }

      count = 1;   // reset for the next group
    }
  }

  return i;        // new length
}