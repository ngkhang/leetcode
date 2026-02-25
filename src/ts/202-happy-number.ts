/**
 * @link https://leetcode.com/problems/happy-number/
 */
function isHappy(n: number): boolean {
    const sumOfSquaredDigits = (n: number): number => {
        let result = 0;

        while (n !== 0) {
            result += (n % 10) ** 2;
            n = Math.trunc(n / 10);
        }
        return result;
    };

    const seen = new Set<number>();

    while (!seen.has(n)) {
        if (n === 1) return true;

        seen.add(n);
        n = sumOfSquaredDigits(n);
    }

    return false;
}

export {};
