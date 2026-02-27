/**
 * @link https://leetcode.com/problems/to-lower-case/
 */
function toLowerCase(s: string): string {
    let result = "";

    for (let char of s) {
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
            continue;
        }
        result += char;
    }
    return result;
}

export {};
