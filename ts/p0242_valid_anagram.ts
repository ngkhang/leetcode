/**
 * @link https://leetcode.com/problems/valid-anagram/
 */
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const letters = Array.from<number>({ length: 26 }).fill(0);
    const UNICODE_A_CHAR = 97;

    for (const letter of s) {
        const index = letter.charCodeAt(0) - UNICODE_A_CHAR;
        letters[index]++;
    }

    for (const letter of t) {
        const index = letter.charCodeAt(0) - UNICODE_A_CHAR;

        if (letters[index] === 0) return false;
        letters[index]--;
    }

    return true;
}

export {};
