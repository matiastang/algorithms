/*
 * @Author: tangdaoyong
 * @Date: 2021-02-25 09:10:53
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-02-25 09:41:08
 * @Description: 867. 转置矩阵
 */
/*
867. 转置矩阵
给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
将矩阵的行列互换得到的新矩阵称为转置矩阵，转置矩阵的行列式不变。
*/
function transposeOne(matrix: number[][]): number[][] {
    // 定义二维数组
    let newMatrix = Array<Array<number>>()
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (i === 0) {
                // 初始化行
                newMatrix[j] = Array(matrix.length)
            }
            // 赋值
            newMatrix[j][i] = row[j];
        }
    }
    return newMatrix;
};

function transposeTwo(matrix: number[][]): number[][] {
    // 定义零时缓存数组
    let tempArr = Array<number>(matrix.length)
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            // 缓存
            tempArr[j] = matrix[j][i];
            // 赋值
            matrix[j][i] = row[j];
        }
    }
    return matrix;
};