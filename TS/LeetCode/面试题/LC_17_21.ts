/*
 * @Author: tangdaoyong
 * @Date: 2021-04-02 09:28:04
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-02 09:32:19
 * @Description: 直方图的水量
 */
/*
面试题 17.21. 直方图的水量
给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
*/
function trap(height: number[]): number {
    let ans = 0
    let tempIndex = 0
    for (let i = 0; i < height.length; i++) {
        const element = height[i];
        
    }
    return ans
};