/*
 * @Author: tangdaoyong
 * @Date: 2023-03-30 21:26:44
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-30 22:06:56
 * @Description: LC 对角线遍历
 */
/*
LC 对角线遍历
给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

 

示例 1：


输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
示例 2：

输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
 

提示：

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
-105 <= mat[i][j] <= 105
*/
function findDiagonalOrder(mat: number[][]): number[] {
    const ans: number[] = []
    const rowLen = mat.length - 1
    const colLen = mat[0].length - 1
    const max = rowLen + colLen
    for (let i = 0; i <= max; i++) {
        const rowMax = Math.min(rowLen, i)
        if (i % 2) {
            for (let m = 0; m <= rowMax; m++) {
                if (i - m <= colLen) {
                    ans.push(mat[m][i - m])
                }
            }
        } else {
            for (let m = rowMax; m >= 0; m--) {
                if (i - m <= colLen) {
                    ans.push(mat[m][i - m])
                } else {
                    break
                }
            }
        }
    }
    return ans
};