/**
 * @link https://leetcode.com/problems/two-sum/
 */
export function twoSum(nums: number[], target: number): number[] {
    let result = [0, 1]; // exactly one solution
    const map = new Map<number, number>();

    nums.forEach((num, index) => {
        map.set(target - num, index);
    });

    for (let index = 0; index < nums.length; index++) {
        const index2 = map.get(nums[index]);

        if (index2 && index2 !== index) {
            result = [index, index2];
            break;
        }
    }

    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
