/**
 * @link https://leetcode.com/problems/valid-palindrome/
 */
function isPalindrome(s: string): boolean {
    const isAlphanumeric = (char: string) => /[a-z0-9]/.test(char);
    const formattedString = s.trim().toLowerCase();

    let start = 0;
    let end = formattedString.length - 1;

    while (start < end) {
        const charStart = formattedString[start];
        const charEnd = formattedString[end];
        if (!isAlphanumeric(charStart)) {
            start++;
            continue;
        }
        if (!isAlphanumeric(charEnd)) {
            end--;
            continue;
        }

        if (charStart !== charEnd) return false;

        start++;
        end--;
    }

    return true;
}

export {};
