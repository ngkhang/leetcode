/**
 * @link https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
 */
function minimumCost(cost: number[]): number {
    const freq = Array.from<number>({ length: 101 }).fill(0);
    let totalPrice = 0;
    let count = 0;

    cost.forEach((index) => freq[index]++);

    for (let index = freq.length - 1; index > 0; index--) {
        while (freq[index] > 0) {
            if (count === 2) {
                count = 0;
            } else {
                totalPrice += index;
                count++;
            }

            freq[index]--;
        }
    }

    return totalPrice;
}

export {};
