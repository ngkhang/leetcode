/**
 * @param {string[]} words
 * @return {string}
 * @link https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 */
var firstPalindrome = function (words) {
    const isPalindrome = (word) => {
        let begin = 0;
        let end = word.length - 1;

        while (begin < end) {
            if (word[begin] !== word[end]) return false;

            begin++;
            end--;
        }
        return true;
    };

    return words.find((word) => isPalindrome(word)) || "";
};
