/**
 * @link https://leetcode.com/problems/first-unique-character-in-a-string/
 */
function firstUniqChar(s: string): number {
    const A_UNICODE = 97;
    const fre: number[] = [];

    for (const char of s) {
        const position = char.charCodeAt(0) - A_UNICODE;
        fre[position] = (fre[position] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - A_UNICODE;

        if (fre[index] === 1) return i;
    }

    return -1;
}

export {};
