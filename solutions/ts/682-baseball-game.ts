/**
 * @link https://leetcode.com/problems/baseball-game/
 */
export function calPoints(operations: string[]): number {
    const nums: number[] = [];

    const map: Record<string, Function> = {
        "+": () => {
            const num1 = nums[nums.length - 1];
            const num2 = nums[nums.length - 2];
            nums.push(num1 + num2);
        },
        C: () => nums.pop(),
        D: () => nums.push(nums[nums.length - 1] * 2),
    };

    for (const op of operations) {
        if (!Number.isNaN(Number(op))) nums.push(+op);
        else map[op]();
    }

    return nums.reduce((total, num) => {
        return (total += num);
    }, 0);
}
