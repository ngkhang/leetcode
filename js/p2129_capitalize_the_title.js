/**
 * @param {string} title
 * @return {string}
 * @link https://leetcode.com/problems/capitalize-the-title/
 */
var capitalizeTitle = function (title) {
    const words = title.toLowerCase().split(" ");

    const capitalizedWords = words.map((word) => {
        if (word.length < 3) return word;

        return word.slice(0, 1).toUpperCase() + word.substring(1);
    });

    return capitalizedWords.join(" ");
};
