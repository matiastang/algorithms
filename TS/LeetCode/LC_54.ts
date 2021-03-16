/*
 * @Author: tangdaoyong
 * @Date: 2021-03-09 21:08:43
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-16 09:30:29
 * @Description: 螺旋矩阵
 */
/*
54. 螺旋矩阵
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/
/**
 * 暴力获取
 * @param matrix 
 * 88 ms	39.5 MB	TypeScript
54/2004
 */
function spiralOrderOne(matrix: number[][]): number[] {
    let ans = Array<number>()
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    while (top <= bottom && left <= right) {
        // 向右
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i])
        }
        top += 1
        if (top > bottom) {
            break
        }
        // 向下
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right])
        }
        right -= 1
        if (left > right) {
            break
        }
        // 向左
        for (let i = right; i >= left; i--) {
            ans.push(matrix[bottom][i])
        }
        bottom -= 1
        if (top > bottom) {
            break
        }
        // 向上
        for (let i = bottom; i >= top; i--) {
            ans.push(matrix[i][left])
        }
        left += 1
        if (left > right) {
            break
        }
    }
    return ans
};
function spiralOrder(matrix: number[][]): number[] {
    let row = matrix.length
    let col = matrix[0].length
    let ans = Array<number>(row * col)
    for (let i = 0; i < row; i++) {
        const rowArr = matrix[i];
        for (let j = 0; j < col; j++) {
            const element = rowArr[j];
            // TODO: - 找位置规律，将[i][j]位置的元素填充到对应位置，需要找到对应关系
        }
    }
    return ans
};