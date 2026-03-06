/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @link https://leetcode.com/problems/backspace-string-compare/
 */
var backspaceCompare = function (s, t) {
    const process = (str, index) => {
        let skip = 0;
        while (index >= 0) {
            if (str[index] === "#") {
                skip++;
                index--;
            } else if (skip > 0) {
                skip--;
                index--;
            } else break;
        }
        return index;
    };

    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        i = process(s, i);
        j = process(t, j);

        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        if (i >= 0 !== j >= 0) return false;

        i--;
        j--;
    }
    return true;
};
