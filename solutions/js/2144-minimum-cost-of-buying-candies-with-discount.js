/**
 * @param {number[]} cost
 * @return {number}
 * @link https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
 */
var minimumCost = function (cost) {
    let total = 0;
    const sorted = cost.sort((a, b) => a - b);

    for (let i = sorted.length - 1; i >= 0; i -= 3) {
        total += cost[i];
        if (i - 1 >= 0) total += cost[i - 1];
    }

    return total;
};
