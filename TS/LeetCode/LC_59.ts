/*
 * @Author: tangdaoyong
 * @Date: 2021-03-16 09:16:19
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-16 09:31:07
 * @Description: file content
 */
/*
59. 螺旋矩阵 II
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
提示：

1 <= n <= 20
*/
/**
 * 暴力填充（此题比54题简单，因为这是一个正方形，54是一个矩形）
 * @param n 
 * 执行用时：
80 ms
, 在所有 TypeScript 提交中击败了
96.88%
的用户
内存消耗：
39.7 MB
, 在所有 TypeScript 提交中击败了
71.88%
的用户
 */
function generateMatrix(n: number): number[][] {
    const ans = Array<number>(n).fill(0).map(() => {
        return Array<number>(n)
    })
    let top = 0, bottom = n - 1, left = 0, right = n - 1, temp = 1
    while (top <= bottom && left <= right) {
        // 向右
        for (let i = left; i <= right; i++) {
            ans[top][i] = temp++
        }
        top++
        // 向下
        for (let i = top; i <= bottom; i++) {
            ans[i][right] = temp++
        }
        right--
        // 向左
        for (let i = right; i >= left; i--) {
            ans[bottom][i] = temp++
        }
        bottom--
        // 向上
        for (let i = bottom; i >= top; i--) {
            ans[i][left] = temp++
        }
        left++
    }
    return ans
};