/**
 * @link https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/
 */
export function duplicateNumbersXOR(nums: number[]): number {
    const map = new Map<number, number>();

    nums.forEach((num) => {
        const count = (map.get(num) || 0) + 1;
        map.set(num, count);
    });

    let result = 0;

    map.forEach((count, num) => {
        if (count === 2) result ^= num;
    });

    return result;
}
