/*
 * @Author: tangdaoyong
 * @Date: 2021-03-24 09:17:00
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-24 09:38:33
 * @Description: 132模式
 */
/*
456. 132模式
给定一个整数序列：a1, a2, ..., an，一个132模式的子序列 ai, aj, ak 被定义为：当 i < j < k 时，ai < ak < aj。设计一个算法，当给定有 n 个数字的序列时，验证这个序列中是否含有132模式的子序列。

注意：n 的值小于15000。

示例1:

输入: [1, 2, 3, 4]

输出: False

解释: 序列中不存在132模式的子序列。
示例 2:

输入: [3, 1, 4, 2]

输出: True

解释: 序列中有 1 个132模式的子序列： [1, 4, 2].
示例 3:

输入: [-1, 3, 2, 0]

输出: True

解释: 序列中有 3 个132模式的的子序列: [-1, 3, 2], [-1, 3, 0] 和 [-1, 2, 0].
*/
function find132pattern(nums: number[]): boolean {
    if (nums.length < 3) {
        return false
    }
    let left = nums[0]
    let right: number | null = nums[1]
    if (right !== null && left >= right) {
        right = null
    }
    for (let i = 2; i < nums.length; i++) {
        const mid = nums[i];
        if (mid > left) {
            if (right === null) {
                right = mid
                continue
            }
            if (mid < right) {
                return true
            } else {
                right = mid
            }
        } else {
            left = mid
        }
    }
    return false
};