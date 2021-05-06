/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 17:42:41
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 18:11:06
 * @Description: 不同路径
 */
/*
62. 不同路径
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

 

示例 1：


输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
*/
/**
 * 
 * @param m 
 * @param n 
 * @returns 
 * 执行用时：100 ms, 在所有 TypeScript 提交中击败了22.14%的用户
 * 内存消耗：40.4 MB, 在所有 TypeScript 提交中击败了14.28%的用户
 */
function uniquePaths(m: number, n: number): number {
    let dp = Array<Array<number>>(m).fill([]).map(() => {
        return new Array<number>(n).fill(0)
    })
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`i=${i},j=${j}`)
            if (i === 0 && j === 0) {
                dp[i][j] = 1
            } else if (i === 0) {
                dp[i][j] = dp[i][j - 1]
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
            }
        }
    }
    console.log(dp)
    return dp[m - 1][n - 1]
};