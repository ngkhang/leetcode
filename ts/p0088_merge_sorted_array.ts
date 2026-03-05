/**
 Do not return anything, modify nums1 in-place instead.
 * @link https://leetcode.com/problems/merge-sorted-array/
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let lastedIndex1 = m - 1;
    let lastedIndex2 = n - 1;
    let fullLengthIndex = m + n - 1;

    while (lastedIndex2 >= 0) {
        const num1 = nums1[lastedIndex1];
        const num2 = nums2[lastedIndex2];
        if (lastedIndex1 >= 0 && num1 >= num2) {
            nums1[fullLengthIndex] = num1;
            lastedIndex1--;
        } else {
            nums1[fullLengthIndex] = num2;
            lastedIndex2--;
        }
        fullLengthIndex--;
    }
}

export {};
