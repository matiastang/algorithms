/*
 * @Author: tangdaoyong
 * @Date: 2021-06-01 09:46:19
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-01 10:02:33
 * @Description: 64. 最小路径和
 */
/*
64. 最小路径和
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
*/
/**
 * 动态规划，可使用滚动数组优化内存
 * @param grid 
 * @returns 
 * 执行用时：96 ms, 在所有 TypeScript 提交中击败了50.44%的用户
 * 内存消耗：40.9 MB, 在所有 TypeScript 提交中击败了29.20%的用户
 */
function minPathSum(grid: number[][]): number {
    let ans = Array<Array<number>>(grid.length).fill([]).map(() => {
        return Array<number>(grid[0].length).fill(1)
    })
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && j === 0) {
                continue
            } else if (i === 0) {
                ans[i][j] = ans[i][j - 1] + grid[i][j]
            } else if (j === 0) {
                ans[i][j] = ans[i - 1][j] + grid[i][j]
            } else {
                ans[i][j] = Math.min(ans[i][j - 1], ans[i - 1][j]) + grid[i][j]
            }
        }
    }
    console.log(ans)
    return ans[ans.length - 1][ans[0].length - 1]
};