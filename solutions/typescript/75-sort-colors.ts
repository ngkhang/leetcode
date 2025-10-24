/**
  Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
  let pStart = 0;
  let pEnd = nums.length - 1;
  let curr = 0;

  while (curr <= pEnd) {
    const num = nums[curr];

    if (num === 2) {
      [nums[curr], nums[pEnd]] = [nums[pEnd], nums[curr]];
      pEnd--;
      continue;
    }
    if (num === 0) {
      [nums[curr], nums[pStart]] = [nums[pStart], nums[curr]];
      pStart++;
    }
    curr++;
  }
}
