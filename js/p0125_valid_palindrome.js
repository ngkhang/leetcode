/**
 * @param {string} s
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-palindrome/
 */
var isPalindrome = function (s) {
    const isAlphanumeric = (char) => /[a-z0-9]/.test(char);
    const formattedString = s.toLowerCase();
    let start = 0;
    let end = formattedString.length - 1;

    while (start < end) {
        const charStart = formattedString[start];
        const charEnd = formattedString[end];

        if (!isAlphanumeric(charStart)) {
            start++;
            continue;
        }

        if (!isAlphanumeric(charEnd)) {
            end--;
            continue;
        }

        if (charStart !== charEnd) return false;

        start++;
        end--;
    }

    return true;
};
