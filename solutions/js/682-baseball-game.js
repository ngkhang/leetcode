/**
 * @param {string[]} operations
 * @return {number}
 * @link https://leetcode.com/problems/baseball-game/
 */
var calPoints = function (operations) {
    const result = [];

    for (const op of operations) {
        if (op === "C") {
            result.pop();
            continue;
        }

        if (!Number.isNaN(Number(op))) {
            result.push(+op);
            continue;
        }

        const size = result.length;
        const newValue = op === "D" ? result[size - 1] * 2 : result[size - 1] + result[size - 2];
        result.push(newValue);
    }

    return result.reduce((total, num) => (total += num), 0);
};
