/*
 * @Author: tangdaoyong
 * @Date: 2021-06-09 21:11:56
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-09 23:24:52
 * @Description: 只出现一次的数字
 */
/*
只出现一次的数字
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4


作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions/xm0u83/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
/**
 * 同数异或为0，0^num = num
 * @param nums 
 * @returns 
 * 执行用时：92 ms, 在所有 TypeScript 提交中击败了75.45%的用户
 * 内存消耗：40.6 MB, 在所有 TypeScript 提交中击败了78.70%的用户
 */
function singleNumber(nums: number[]): number {
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i];
    }
    return ans
};