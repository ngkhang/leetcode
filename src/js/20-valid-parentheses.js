/**
 * @param {string} s
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-parentheses/
 */
var isValid = function (s) {
    const stackOpening = [];

    for (let char of s) {
        if (char === "{" || char === "[" || char === "(") {
            stackOpening.push(char);
            continue;
        }

        if (stackOpening.length === 0) return false;

        const topStack = stackOpening.pop();
        if (!topStack) return false;

        if (
            (char === "}" && topStack !== "{") ||
            (char === "]" && topStack !== "[") ||
            (char === ")" && topStack !== "(")
        )
            return false;
    }

    return stackOpening.length === 0;
};
