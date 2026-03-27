/**
 * @link https://leetcode.com/problems/gcd-of-odd-and-even-sums/
 */
function gcdOfOddEvenSums(n: number): number {
    // Solution 1:
    return n; // sumOdd = n^2; sumEven = n*(n+1) --> GCD (n^2; n*(n+1)) = n

    // Solution 2:
    // const getSumNumbers = (u1: number, d: number, n: number): number => {
    //     return (n * (2 * u1 + (n - 1) * d)) / 2;
    // };

    // let sumOdd = getSumNumbers(1, 2, n);
    // let sumEven = getSumNumbers(2, 2, n);

    // while (sumOdd && sumEven) {
    //     if (sumOdd < sumEven) {
    //         sumEven = sumEven % sumOdd;
    //     } else {
    //         sumOdd = sumOdd % sumEven;
    //     }
    // }

    // return sumOdd || sumEven;
}
