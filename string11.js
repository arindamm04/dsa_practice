/*
KMP algorithm
*/



function buildLPS(t){
    const lps = new Array(t.length).fill(0);
    let j = 0;
    let i = 1

    while (i < t.length){
        if(t[i] === t[j]){
            j++
            lps[i] = j;
            i++
        }
        else if(j>0){
            j = lps[j-1];
        }
        else{
            lps[i] = 0
            i++
        }
    }

    return lps;
}


function shortestPalindrome(s) {
  const rev = s.split("").reverse().join("");
  const t = s + "#" + rev;

  const lps = buildLPS(t);
  const L = lps[t.length - 1];          // longest palindromic prefix

  const toAdd = rev.substring(0, s.length - L);   // reversed remaining part
  return toAdd + s;
}