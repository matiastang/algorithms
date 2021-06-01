/*
 * @Author: tangdaoyong
 * @Date: 2021-06-01 09:24:00
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-01 09:43:11
 * @Description: 63. 不同路径 II
 */
/*
63. 不同路径 II
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。
*/
/**
 * 动态规划，根据左和上推断出当前位置的数据
 * @param obstacleGrid 
 * @returns 
 * 执行用时：108 ms, 在所有 TypeScript 提交中击败了22.37%的用户
 * 内存消耗：40.4 MB, 在所有 TypeScript 提交中击败了56.58%的用户
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let col = obstacleGrid[0].length
    let ans = Array<Array<number>>(obstacleGrid.length).fill([]).map(() => {
        return Array<number>(col)
    })
    for (let i = 0; i < obstacleGrid.length; i++) {
        const colArr = obstacleGrid[i]
        for (let j = 0; j < colArr.length; j++) {
            const element = obstacleGrid[i][j];
            if (element === 1) {
                ans[i][j] = 0
            } else {
                if (i === 0 && j > 0) {
                    ans[i][j] = ans[i][j - 1]
                } else if (j === 0 && i > 0) {
                    ans[i][j] = ans[i - 1][j]
                } else if (i === 0 && j === 0) {
                    ans[i][j] = 1
                } else {
                    ans[i][j] = ans[i][j - 1] + ans[i - 1][j]
                }
            }
        }
        
    }
    return ans[obstacleGrid.length - 1][col - 1]
};