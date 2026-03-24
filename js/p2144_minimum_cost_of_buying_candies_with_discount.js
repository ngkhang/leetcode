/**
 * @param {number[]} cost
 * @return {number}
 * @link https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
 */
var minimumCost = function (cost) {
    const freq = Array.from({ length: 101 }).fill(0);
    let count = 0;
    let totalPrice = 0;

    cost.forEach((index) => freq[index]++);

    for (let i = freq.length - 1; i > 0; i--) {
        while (freq[i] > 0) {
            if (count !== 2) {
                totalPrice += i;
                count++;
            } else count = 0;

            freq[i]--;
        }
    }

    return totalPrice;
};
