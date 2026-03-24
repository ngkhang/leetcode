/**
 * @link https://leetcode.com/problems/ransom-note/
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    const UNICODE_A = "a".charCodeAt(0);
    const freq = Array.from<number>({ length: 26 }).fill(0);

    for (const char of magazine) {
        const unicode = char.charCodeAt(0);
        freq[unicode - UNICODE_A]++;
    }

    for (const char of ransomNote) {
        const unicode = char.charCodeAt(0);
        const index = unicode - UNICODE_A;
        if (freq[index] === 0) return false;

        freq[index]--;
    }

    return true;
}

export {};
