/**
 * @link https://leetcode.com/problems/capitalize-the-title/
 */
function capitalizeTitle(title: string): string {
    const words = title.toLowerCase().split(" ");

    const capitalizedWords = words.map((word) => {
        if (word.length < 3) return word;

        return word.slice(0, 1).toUpperCase() + word.substring(1);
    });

    return capitalizedWords.join(" ");
}

export {};
