/**
 * @param {string} s
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-parentheses/
 */
var isValid = function (s) {
    const stackOpening = [];

    const map = new Map([
        ["[", "]"],
        ["(", ")"],
        ["{", "}"],
    ]);

    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];

        if (currChar === "[" || currChar === "{" || currChar === "(") {
            stackOpening.push(currChar);
            continue;
        }

        if (stackOpening.length === 0) return false;

        const lastedBracket = stackOpening.pop();
        if (!lastedBracket) return false;

        const char = map.get(lastedBracket);
        if (char !== currChar) return false;
    }

    return stackOpening.length === 0;
};
