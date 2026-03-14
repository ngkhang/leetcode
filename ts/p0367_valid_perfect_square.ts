/**
 * @link https://leetcode.com/problems/valid-perfect-square/
 */
function isPerfectSquare(num: number): boolean {
    let low = 1;
    let high = num;

    while (low <= high) {
        const midd = Math.floor((low + high) / 2);
        const square = midd * midd;

        if (square === num) return true;
        square > num ? (high = midd - 1) : (low = midd + 1);
    }

    return false;
}

export {};
