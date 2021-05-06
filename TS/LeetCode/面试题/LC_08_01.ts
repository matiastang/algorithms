/*
 * @Author: tangdaoyong
 * @Date: 2021-05-06 15:15:33
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-06 15:29:53
 * @Description: 三步问题
 */
/*
面试题 08.01. 三步问题
三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

示例1:

 输入：n = 3 
 输出：4
 说明: 有四种走法
示例2:

 输入：n = 5
 输出：13
提示:

n范围在[1, 1000000]之间
*/
/**
 * 
 * @param n 
 * @returns 
 * 执行用时：112 ms, 在所有 TypeScript 提交中击败了69.70%的用户
 * 内存消耗：39.6 MB, 在所有 TypeScript 提交中击败了75.76%的用户
 */
function waysToStep(n: number): number {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    if (n === 3) {
        return 4
    }
    let temp = 0, temp1 = 1, temp2 = 2, temp3 = 4
    for (let i = 4; i <= n; i++) {
        temp = temp1 % 1000000007
        temp1 = temp2 % 1000000007
        temp2 = temp3 % 1000000007
        temp3 = (temp + temp1 + temp2) % 1000000007
    }
    return temp3
};