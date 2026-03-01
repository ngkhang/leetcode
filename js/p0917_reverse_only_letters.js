/**
 * @param {string} s
 * @return {string}
 * @link https://leetcode.com/problems/reverse-only-letters/
 */
var reverseOnlyLetters = function (s) {
    // Solution 1
    const isEnglishLetter = (char) => {
        const code = char.charCodeAt(0);
        return (65 <= code && code <= 90) || (97 <= code && code <= 122);
    };

    const stack = [];
    let result = "";

    for (const char of s) {
        if (isEnglishLetter(char)) stack.push(char);
    }

    for (const char of s) {
        result += isEnglishLetter(char) ? stack.pop() : char;
    }

    return result;

    // Solution 2
    // const regex = /[a-zA-Z]/;
    // const chars = s.split("");

    // let left = 0;
    // let right = chars.length - 1;

    // while (left < right) {
    //     if (!regex.test(chars[left])) {
    //         left++;
    //     } else if (!regex.test(chars[right])) {
    //         right--;
    //     } else {
    //         [chars[left], chars[right]] = [chars[right], chars[left]];
    //         left++;
    //         right--;
    //     }
    // }

    // return chars.join("");
};
