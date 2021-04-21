/*
 * @Author: tangdaoyong
 * @Date: 2021-04-20 09:38:49
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-20 15:20:02
 * @Description: 整数反转
 */
/*
7. 整数反转
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 

示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0
 

提示：

-231 <= x <= 231 - 1

*/
/*
我总结了几道类似的题目，方便你查看

题目	题解	难度等级
整数反转	链接	简单
回文数	链接	简单
字符串转换整数 (atoi)	链接	中等
*/
/**
 * 转成字符串处理
 * @param x 
 * @returns 
 * 执行用时：104 ms, 在所有 TypeScript 提交中击败了73.49%的用户
 * 内存消耗：40.5 MB, 在所有 TypeScript 提交中击败了13.15%的用户
 */
function reverse(x: number): number {
    let numStr = '' + x
    let newNum = ''
    if (x < 0) {
        numStr = numStr.slice(1)
    }
    for (let i = numStr.length - 1; i >= 0; i--) {
        newNum += numStr[i]
    }
    if (x < 0) {
        let num = 0 - Number(newNum)
        if (num < -2147483648) {
            return 0
        }
        return num
    }
    let num = Number(newNum)
    if (num > 2147483647) {
        return 0
    }
    return num
};

/**
 * 整数处理
 * @param x 
 * @returns 
 * 执行用时：108 ms, 在所有 TypeScript 提交中击败了53.86%的用户
 * 内存消耗：40.6 MB, 在所有 TypeScript 提交中击败了12.73%的用户
 */
function reverseOne(x: number): number {
    if (x === 0) {
        return 0
    }
    // 是否是负数
    let isMinus = false
    let ans = 0
    if (x < 0) {
        x = 0 - x
        isMinus = true
    }
    while (x > 0) {
        let temp = x % 10
        x = Math.floor(x / 10)
        ans = ans * 10 + temp
    }
    //最大的值与最小的值为：[−2^31, 2^31 − 1]， 即：[-2147483648, 2147483647]
    if (isMinus) {
        ans = 0 - ans
        return ans < -2147483648 ? 0 : ans
    }
    return ans > 2147483647 ? 0 : ans
}
