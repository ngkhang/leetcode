/**
 * @link https://leetcode.com/problems/backspace-string-compare/
 */
export function backspaceCompare(s: string, t: string): boolean {
    // Solution 2:
    const process = (str: string, index: number, skip: number): number => {
        while (index >= 0) {
            if (str[index] === "#") {
                skip++;
            } else if (skip > 0) {
                skip--;
            } else break;
            index--;
        }
        return index;
    };

    let i = s.length - 1;
    let j = t.length - 1;
    let skipS = 0;
    let skipT = 0;

    while (i >= 0 || j >= 0) {
        i = process(s, i, skipS);
        j = process(t, j, skipT);
        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        if (i >= 0 !== j >= 0) return false;

        i--;
        j--;
    }

    return true;

    // // Solution 1
    // const process = (str: string): string => {
    //     const stack: string[] = [];

    //     for (const char of str) {
    //         if (char === "#") stack.pop();
    //         else stack.push(char);
    //     }

    //     return stack.join();
    // };

    // const strS = process(s);
    // const strT = process(t);

    // return strS === strT;
}
