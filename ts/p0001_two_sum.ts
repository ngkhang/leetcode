/**
 * @link https://leetcode.com/problems/two-sum/
 */
function twoSum(nums: number[], target: number): number[] {
    const mapNum = new Map<number, number>();

    for (let index = 0; index < nums.length; index++) {
        const num2 = target - nums[index];
        const index2 = mapNum.get(num2);

        if (index2 !== undefined && index2 >= 0) {
            return [index, index2];
        }

        mapNum.set(nums[index], index);
    }

    return [0, 1]; // Type-safe: Exactly one solution
}

export {};
