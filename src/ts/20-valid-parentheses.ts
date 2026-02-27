/**
 * @link https://leetcode.com/problems/valid-parentheses/
 */
function isValid(s: string): boolean {
    const isOpening = (bracket: string): boolean => {
        return bracket === "{" || bracket === "[" || bracket === "(";
    };

    const map = new Map<string, string>([
        ["[", "]"],
        ["{", "}"],
        ["(", ")"],
    ]);

    const stackBracketOpening: string[] = [];

    for (let char of s) {
        if (isOpening(char)) {
            stackBracketOpening.push(char);
            continue;
        }

        const topStack = stackBracketOpening.pop();
        if (!topStack) return false;

        if (char !== map.get(topStack)) return false;
    }

    return stackBracketOpening.length === 0;
}

export {};
