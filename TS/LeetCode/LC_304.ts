/*
 * @Author: tangdaoyong
 * @Date: 2021-03-02 09:18:10
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-02 21:44:45
 * @Description: 304. 二维区域和检索 - 矩阵不可变
 */
/*
304. 二维区域和检索 - 矩阵不可变
给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。
上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。
*/
class NumMatrixOne {

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
* 120 ms	43 MB	TypeScript
*/
class NumMatrixTwo {

    numberMatrix:Array<Array<number>>

    constructor(matrix: number[][]) {
        // 改变matrix内存
        for (let i = 0; i < matrix.length; i++) {
            let sum = 0
            for (let j = 0; j < matrix[i].length; j++) {
                sum += matrix[i][j];
                matrix[i][j] = sum
            }
        }
        this.numberMatrix = matrix
    }

    /**
     * @param row1 
     * @param col1 
     * @param row2 
     * @param col2 
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let num = 0
        for (let i = row1; i <= row2; i++) {
            if (col1 === 0) {
                num += this.numberMatrix[i][col2]
            } else {
                num += this.numberMatrix[i][col2] - this.numberMatrix[i][col1 - 1]
            }
        }
        return num
    }
}

/*
* 二维前缀和
*/
class NumMatrixThree {

    numberMatrix = Array<Array<number>>()

    constructor(matrix: number[][]) {
        // 改变matrix内存
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i === 0 && j === 0) {
                    matrix[i][j] = matrix[i][j]
                } else if (i === 0) {
                    matrix[i][j] = matrix[0][j] + matrix[0][j - 1]
                } else if (j === 0) {
                    matrix[i][j] = matrix[i][0] + matrix[i - 1][0]
                } else {
                    matrix[i][j] = matrix[i][j] + matrix[i - 1][j] + matrix[i][j - 1] - matrix[i - 1][j - 1]
                }
            }
        }
        this.numberMatrix = matrix
        console.log(matrix)
    }

    /**
     * @param row1 
     * @param col1 
     * @param row2 
     * @param col2 
     * 116 ms	43.6 MB	TypeScript
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        if (row1 === 0 && col1 === 0) {
            return this.numberMatrix[row2][col2]
        } else if (row1 === 0) {
            return this.numberMatrix[row2][col2] -  this.numberMatrix[row2][col1 - 1]
        } else if (col1 === 0) {
            return this.numberMatrix[row2][col2] - this.numberMatrix[row1 - 1][col2]
        }
        return this.numberMatrix[row2][col2] - this.numberMatrix[row2][col1 - 1] - this.numberMatrix[row1 - 1][col2] + this.numberMatrix[row1 - 1][col1 - 1]
    }
}