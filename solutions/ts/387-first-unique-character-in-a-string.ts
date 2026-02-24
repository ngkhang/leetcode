/**
 * @link https://leetcode.com/problems/first-unique-character-in-a-string/
 */
export function firstUniqChar(s: string): number {
    const A_UNICODE = 97;
    const alphabets = new Array<number>(26);

    for (const char of s) {
        const index = char.charCodeAt(0) - A_UNICODE;
        alphabets[index] = (alphabets[index] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - A_UNICODE;
        if (alphabets[index] === 1) return i;
    }

    return -1;
};
