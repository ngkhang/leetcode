/**
 * @link https://leetcode.com/problems/binary-search/
 */
function search(nums: number[], target: number): number {
    const size = nums.length;
    let leftIndex = 0;
    let rightIndex = size - 1;

    while (leftIndex <= rightIndex) {
        const middIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        const num = nums[middIndex];

        if (num === target) return middIndex;
        if (num > target) rightIndex = middIndex - 1;
        else leftIndex = middIndex + 1;
    }

    return -1;
}

export {};
