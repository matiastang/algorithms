/*
 * @Author: tangdaoyong
 * @Date: 2023-03-30 19:50:12
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-30 20:52:36
 * @Description: LC 旋转矩阵
 */
/*
LC 旋转矩阵
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？

 

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    // 对角线交换再上下或左右，具体看更具那条对角线交换的
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        const rows = matrix[i]
        let left = 0
        let right = rows.length - 1
        if (left === right) {
            continue
        }
        while (left < right) {
            const temp = rows[left]
            rows[left] = rows[right]
            rows[right] = temp
            left += 1
            right -= 1
        }
    }
};