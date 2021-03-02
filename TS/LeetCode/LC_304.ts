/*
 * @Author: tangdaoyong
 * @Date: 2021-03-02 09:18:10
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-02 10:03:59
 * @Description: 304. 二维区域和检索 - 矩阵不可变
 */
/*
304. 二维区域和检索 - 矩阵不可变
给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。
上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。
*/
class NumMatrix {

    numberMatrix = Array<Array<number>>()

    constructor(matrix: number[][]) {
        this.numberMatrix = matrix
    }

    /**
     * 暴力
     * @param row1 
     * @param col1 
     * @param row2 
     * @param col2 
     * 	超出时间限制	N/A	N/A	TypeScript
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0
        for (let i = 0; i < this.numberMatrix.length; i++) {
            if (i < row1) {
                continue
            }
            if (i > row2) {
                break
            }
            const rowArr = this.numberMatrix[i];
            for (let j = 0; j < rowArr.length; j++) {
                if (j >= col1 && j <= col2) {
                    console.log(rowArr[j])
                    sum += rowArr[j]
                }
            }
        }
        return sum
    }

    /**
     * 简单优化
     * @param row1 
     * @param col1 
     * @param row2 
     * @param col2 
     * 236 ms	42.8 MB	TypeScript
     */
    sumRegionTwo(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.numberMatrix[i][j]
            }
        }
        return sum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
/*
* 一维前缀和
*/

/*
* 二维前缀和
*/