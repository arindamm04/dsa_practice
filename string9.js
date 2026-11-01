/*
Number of laser beams in bank
*/

function numberOfBeams(bank) {
  let prev = 0;     // devices in the previous non-empty row
  let next = 0;     // devices in the current row
  let result = 0;   // total beams

  for (let i = 0; i < bank.length; i++) {          // loop over rows
    next = 0;                                      // reset for each row

    for (let j = 0; j < bank[i].length; j++) {     // loop over columns
      if (bank[i][j] === "1") {
        next++;                                    // found a device
      }
    }

    if (next > 0) {                                // skip empty rows
      result += prev * next;                       // beams between the two rows
      prev = next;                                 // current row becomes previous
    }
  }

  return result;
}