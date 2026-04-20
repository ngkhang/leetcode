/**
 * @link https://leetcode.com/problems/valid-parentheses/
 */
type Opening = "[" | "(" | "{";
type Closing = "]" | ")" | "}";

const isOpening = (bracket: string): bracket is Opening => {
    if (bracket === "(" || bracket === "[" || bracket === "{") return true;
    return false;
};

export function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;

    const map = new Map<Opening, Closing>([
        ["[", "]"],
        ["(", ")"],
        ["{", "}"],
    ]);

    const stackOpening: Opening[] = [];

    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];

        if (isOpening(currChar)) {
            stackOpening.push(currChar);
            continue;
        }

        if (stackOpening.length === 0) return false;

        const lastBracketFromStack = stackOpening.pop();
        if (!lastBracketFromStack) return false;

        const char = map.get(lastBracketFromStack);
        if (char !== currChar) return false;
    }

    return stackOpening.length === 0;
}
