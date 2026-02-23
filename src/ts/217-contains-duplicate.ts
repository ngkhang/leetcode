/**
 * @link https://leetcode.com/problems/contains-duplicate/
 */
function containsDuplicate(nums: number[]): boolean {
    const mapNums = new Set<number>();

    for (const num of nums) {
        if (mapNums.has(num)) return true;
        mapNums.add(num);
    }

    return false;
}

export {};
