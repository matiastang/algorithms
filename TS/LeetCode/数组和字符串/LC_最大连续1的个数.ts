/*
 * @Author: tangdaoyong
 * @Date: 2023-04-08 16:04:06
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-04-08 16:05:27
 * @Description: 最大连续1的个数
 */
/*
LC 最大连续1的个数
给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

 

示例 1：

输入：nums = [1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
示例 2:

输入：nums = [1,0,1,1,0,1]
输出：2
 

提示：

1 <= nums.length <= 105
nums[i] 不是 0 就是 1.

作者：LeetCode
链接：https://leetcode.cn/leetbook/read/array-and-string/cd71t/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
function findMaxConsecutiveOnes(nums: number[]): number {
    let ans = 0
    let last = 0
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        if (item) {
            last += 1
            ans = Math.max(ans, last)
        } else {
            last = 0
        }
    }
    return ans
};