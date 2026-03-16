/**
 * @link https://leetcode.com/problems/counting-words-with-a-given-prefix/
 */
export function prefixCount(words: string[], pref: string): number {
    let count = 0;

    words.forEach((word) => {
        if (word.startsWith(pref)) count++;
    })

    return count;
};
