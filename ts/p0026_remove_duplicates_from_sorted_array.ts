/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    if (n === 0 || n === 1) return n;

    let count = 1;
    let step = 1;
    while (step < n) {
        if (nums[step] !== nums[step - 1]) {
            nums[count] = nums[step];
            count++;
        }

        step++;
    }

    return count;
}

export {};
