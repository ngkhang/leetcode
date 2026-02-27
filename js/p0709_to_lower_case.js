/**
 * @param {string} s
 * @return {string}
 * @link https://leetcode.com/problems/to-lower-case/
 */
var toLowerCase = function (s) {
    let result = "";

    for (const char of s) {
        const code = char.charCodeAt(0);
        const newCode = code >= 65 && code <= 90 ? code + 32 : code;

        result += String.fromCharCode(newCode);
    }
    return result;
};
