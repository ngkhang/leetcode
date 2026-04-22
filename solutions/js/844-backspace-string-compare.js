/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @link https://leetcode.com/problems/backspace-string-compare/
 */
var backspaceCompare = function (s, t) {
    // Solution 2
    const process = (str, index, skip) => {
        while (index >= 0) {
            if (str[index] === "#") {
                skip++;
            } else if (skip > 0) {
                skip--;
            } else break;
            index--;
        }

        return index;
    };

    let i = s.length - 1;
    let skipS = 0;
    let j = t.length - 1;
    let skipT = 0;

    while (i >= 0 || j >= 0) {
        i = process(s, i, skipS);
        j = process(t, j, skipT);

        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        if (i >= 0 !== j >= 0) return false;

        i--;
        j--;
    }

    return true;

    // //    Solution 1
    // const process = (str) => {
    //     const stackStr = [];

    //     for (const char of str) {
    //         if (char === "#") stackStr.pop();
    //         else stackStr.push(char);
    //     }

    //     return stackStr.join();
    // };

    // const stackStrS = process(s);
    // const stackStrT = process(t);

    // return stackStrS === stackStrT;
};
