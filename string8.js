/*
restore IP address
*/

function restoreIpAddresses(s) {
  const result = [];
  const ipParts = [];

  function recursive(str, start, ipParts, result) {
    // Base case: 4 parts made
    if (ipParts.length === 4) {
      if (start === str.length) {
        result.push(ipParts[0] + "." + ipParts[1] + "." + ipParts[2] + "." + ipParts[3]);
      }
      return;
    }

    for (let len = 1; len <= 3; len++) {
            

      const segment = str.substring(start, start + len);

      if (segment.length > 1) {
        if (segment[0] === "0") break;               // leading zero
      }

      if (Number(segment) > 255) break;              // too big

      ipParts.push(segment);                         // add
      recursive(str, start + len, ipParts, result);  // go deeper
      ipParts.pop();                                 // undo
    }
  }

  recursive(s, 0, ipParts, result);
  return result;
}