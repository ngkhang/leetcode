/**
 * @link https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */
function uncommonFromSentences(s1: string, s2: string): string[] {
    const uncommon: string[] = [];
    const map = new Map<string, number>();
    const arrStr = `${s1} ${s2}`.split(" ");

    for (const str of arrStr) {
        map.set(str, (map.get(str) || 0) + 1);
    }

    map.forEach((count, str) => count === 1 && uncommon.push(str));

    return uncommon;
}

export {};
