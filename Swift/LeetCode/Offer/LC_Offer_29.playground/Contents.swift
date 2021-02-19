import UIKit

/*
 剑指 Offer 29. 顺时针打印矩阵
 
 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

  

 示例 1：

 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 输出：[1,2,3,6,9,8,7,4,5]
 示例 2：

 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
  

 限制：

 0 <= matrix.length <= 100
 0 <= matrix[i].length <= 100

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class Solution {
    func spiralOrder(_ matrix: [[Int]]) -> [Int] {
        guard let first = matrix.first else {
            return []
        }
        var arr = [Int]()
        var top = 0
        var left = 0
        var right = first.count - 1
        var bottom = matrix.count - 1
        while true {
            if top >= bottom && left >= right {
                arr.append(matrix[top][left])
                return arr
            }
            if top == bottom {
                arr.append(contentsOf: matrix[top][left...right])
                return arr
            }
            if left == right {
                for key in top...bottom {
                    arr.append(matrix[key][right])
                }
                return arr
            }
            if top < bottom {
                arr.append(contentsOf: matrix[top][left...right])
                top += 1
            } else {
                if top == bottom {
                    arr.append(contentsOf: matrix[top][left...right])
                    return arr
                }
            }
            if right > left {
                for key in top...bottom {
                    arr.append(matrix[key][right])
                }
                right -= 1
            } else {
                if left == right {
                    for key in top...bottom {
                        arr.append(matrix[key][right])
                    }
                    return arr
                }
            }
            if bottom > top {
                arr.append(contentsOf: matrix[bottom][left...right].reversed())
                bottom -= 1
            } else {
                if top == bottom {
                    arr.append(contentsOf: matrix[top][left...right])
                    return arr
                }
            }
            if left < right {
                for key in (top...bottom).reversed() {
                    arr.append(matrix[key][left])
                }
                left += 1
            } else {
                if left == right {
                    for key in top...bottom {
                        arr.append(matrix[key][right])
                    }
                    return arr
                }
            }
        }
    }
}
