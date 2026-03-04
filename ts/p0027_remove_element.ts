/**
 * @link https://leetcode.com/problems/remove-element/
 */
function removeElement(nums: number[], val: number): number {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        if (nums[start] !== val) {
            start++;
            continue;
        }

        [nums[start], nums[end]] = [nums[end], nums[start]];
        end--;
    }

    return start;
}

export {};
