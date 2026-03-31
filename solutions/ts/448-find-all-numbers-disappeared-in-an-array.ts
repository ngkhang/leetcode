/**
 * @link https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
 */
export function findDisappearedNumbers(nums: number[]): number[] {
    const SIZE = nums.length;
    const result: number[] = [];
    const mapNumber = new Map<number, number>();

    nums.forEach((num) => mapNumber.set(num, 1));

    for (let i = 1; i <= SIZE; i++) {
        if (!mapNumber.has(i)) result.push(i);
    }
    return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
