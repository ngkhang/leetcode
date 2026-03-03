/**
 * @link https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 */

function firstPalindrome(words: string[]): string {
    const isPalindrome = (word: string): boolean => {
        let begin = 0;
        let end = word.length - 1;

        while (begin < end) {
            if (word[begin] !== word[end]) return false;

            begin++;
            end--;
        }
        return true;
    };

    return words.find((word) => isPalindrome(word)) || "";
}

export {};
