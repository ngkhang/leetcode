/**
 * @link https://leetcode.com/problems/ransom-note/
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>();

    for (const s of magazine) {
        const value = (map.get(s) || 0) + 1;
        map.set(s, value);
    }

    for (const s of ransomNote) {
        const value = (map.get(s) || 0) - 1;

        if (value === -1) return false;
        map.set(s, value);
    }

    return true;
}
