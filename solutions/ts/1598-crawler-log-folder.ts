/**
 * @link https://leetcode.com/problems/crawler-log-folder/
 */
export function minOperations(logs: string[]): number {
    // Solution 2
    let count = 0;
    for (const folder of logs) {
        if (folder === "./") continue;
        count = folder === "../" ? Math.max(count - 1, 0) : count + 1;
    }
    return count;

    // // Solution 1
    // const logFolders: string[] = [];

    // for (let i = 0; i < logs.length; i++) {
    //     const folder = logs[i];

    //     if (folder === "./") continue;

    //     if (folder === "../") {
    //         logFolders.pop();
    //         continue;
    //     }

    //     logFolders.push(folder);
    // }

    // return logFolders.length;
}
