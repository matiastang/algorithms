/*
 * @Author: tangdaoyong
 * @Date: 2023-03-30 20:16:20
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-30 20:27:50
 * @Description: 1637. 两点之间不包含任何点的最宽垂直区域
 */
/*
1637. 两点之间不包含任何点的最宽垂直区域
给你 n 个二维平面上的点 points ，其中 points[i] = [xi, yi] ，请你返回两点之间内部不包含任何点的 最宽垂直区域 的宽度。

垂直区域 的定义是固定宽度，而 y 轴上无限延伸的一块区域（也就是高度为无穷大）。 最宽垂直区域 为宽度最大的一个垂直区域。

请注意，垂直区域 边上 的点 不在 区域内。

 

示例 1：

​
输入：points = [[8,7],[9,9],[7,4],[9,7]]
输出：1
解释：红色区域和蓝色区域都是最优区域。
示例 2：

输入：points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
输出：3
 

提示：

n == points.length
2 <= n <= 105
points[i].length == 2
0 <= xi, yi <= 109
*/
function maxWidthOfVerticalArea(points: number[][]): number {
    const sortPoints = points.map((item) => {
        return item[0]
    }).sort((left, right) => left - right)

    let max = 0
    for (let i = 1; i < sortPoints.length; i++) {
        const w = sortPoints[i] - sortPoints[i - 1]
        if (w > max) {
            max = w
        }
    }
    return max
};