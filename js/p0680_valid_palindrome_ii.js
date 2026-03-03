/**
 * @param {string} s
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-palindrome-ii/
 */
var validPalindrome = function (s) {
    const isPalindrome = (s, begin, end) => {
        while (begin < end) {
            if (s[begin] !== s[end]) return false;

            begin++;
            end--;
        }
        return true;
    };

    let begin = 0;
    let end = s.length - 1;

    while (begin < end) {
        if (s[begin] !== s[end]) {
            return isPalindrome(s, begin + 1, end) || isPalindrome(s, begin, end - 1);
        }

        begin++;
        end--;
    }

    return true;
};
