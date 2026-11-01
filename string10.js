function reverseWords(s) {
    let result = "";
    let i = s.length - 1;

    while (i >= 0) {
        while (i >= 0 && s[i] === " ") {
            i--;
        }

        if (i < 0) break;

        let j = i;
        while (j >= 0 && s[j] !== " ") {
            j--;
        }

        if (result.length > 0) {
            result += " ";
        }

        result += s.slice(j + 1, i + 1);
        i = j;
    }

    return result;
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));