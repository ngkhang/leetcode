/**
 * @link https://leetcode.com/problems/remove-element/
 */
export function removeElement(nums: number[], val: number): number {
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[i] !== val) {
            i++;
            continue;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
        j--;
    }
    return i;
};
