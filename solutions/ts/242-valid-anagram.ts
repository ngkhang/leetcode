/**
 * @link https://leetcode.com/problems/valid-anagram/
 */
export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const UNICODE_A = 97;
    const arrFrequency = Array.from<number>({ length: 26 }).fill(0);

    for (let i = 0; i < s.length; i++) {
        const unicodeS = s[i].charCodeAt(0);
        arrFrequency[unicodeS - UNICODE_A]++;
    }

    for (let i = 0; i < t.length; i++) {
        const unicodeT = t[i].charCodeAt(0);
        const count = arrFrequency[unicodeT - UNICODE_A];
        if (count === 0) return false;
        arrFrequency[unicodeT - UNICODE_A]--;
    }

    return true;
};
