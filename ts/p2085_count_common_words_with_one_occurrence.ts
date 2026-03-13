/**
 * @link https://leetcode.com/problems/count-common-words-with-one-occurrence/
 */
function countWords(words1: string[], words2: string[]): number {
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();

    for (const word of words1) {
        map1.set(word, (map1.get(word) || 0) + 1);
    }

    for (const word of words2) {
        map2.set(word, (map2.get(word) || 0) + 1);
    }

    let count = 0;

    for (const [word, value] of map1) {
        if (map2.get(word) === 1 && value === 1) count++;
    }

    return count;

};

export { };
