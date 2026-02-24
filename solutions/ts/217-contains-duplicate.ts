/**
 * @link https://leetcode.com/problems/contains-duplicate/
 */
export function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();

    for (const number of nums) {
        if (set.has(number)) return true;
        set.add(number);
    }

    return false;
};
