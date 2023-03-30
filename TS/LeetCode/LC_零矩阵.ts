/*
 * @Author: tangdaoyong
 * @Date: 2023-03-30 20:57:06
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-30 21:21:34
 * @Description: LC 零矩阵
 */
/*
LC 零矩阵
编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

 

示例 1：

输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2：

输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

作者：LeetCode
链接：https://leetcode.cn/leetbook/read/array-and-string/ciekh/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
/**
 Do not return anything, modify matrix in-place instead.
*/
function setZeroes(matrix: number[][]): void {
    const dp = Array()
    for (let i = 0; i < matrix.length; i++) {
        dp.push(Array(matrix[i].length).fill(0))
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes(0)) {
            continue
        }
        for (let j = 0; j < matrix[i].length; j++) {
            let isCol = true
            for (let k = 0; k < matrix.length; k++) {
                const item = matrix[k][j];
                if (item === 0) {
                    isCol = false
                    break
                }
            }
            if (isCol) {
                dp[i][j] = matrix[i][j]
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = dp[i][j]
        }
    }
};