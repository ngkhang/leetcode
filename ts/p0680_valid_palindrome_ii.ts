/**
 * @link https://leetcode.com/problems/valid-palindrome-ii/
 */
function validPalindrome(s: string): boolean {
    const isPal = (s: string, i: number, j: number): boolean => {
        while (i < j) {
            if (s[i] !== s[j]) return false;

            i++;
            j--;
        }
        return true;
    };

    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            return isPal(s, start + 1, end) || isPal(s, start, end - 1);
        }
        start++;
        end--;
    }

    return true;
}

export {};
