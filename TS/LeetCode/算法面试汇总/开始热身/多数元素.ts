/*
 * @Author: tangdaoyong
 * @Date: 2021-06-09 23:30:03
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-09 23:58:30
 * @Description: 多数元素
 */
/*
多数元素
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1：

输入：[3,2,3]
输出：3
示例 2：

输入：[2,2,1,1,1,2,2]
输出：2
 

进阶：

尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions/xm77tm/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
/**
 * 成对删除不相等的元素
 * @param nums
 * 执行用时：116 ms, 在所有 TypeScript 提交中击败了9.43%的用户
 * 内存消耗：41.6 MB, 在所有 TypeScript 提交中击败了61.64%的用户
 */
function majorityElement(nums: number[]): number {
    let left = 0, right = 1
    // 成对删除不相等的元素
    while (right < nums.length) {
        if (nums[left] === nums[right]) {
            right += 1
        } else {
            // 交换right和left + 1的数字，然后left跳两格，模拟删除了left和right,这时的有效数据未left + 2 到末尾
            [nums[left + 1], nums[right]] = [nums[right], nums[left + 1]]
            left += 2
            right += 1
        }
    }
    return nums[left]
};

/**
 * 排序后中间位置肯定是结果
 * @param nums 
 * @returns 
 */
function majorityElementOne(nums: number[]): number {
    // 排序后中间位置肯定是结果
    nums = nums.sort((left, right) => left - right)
    return nums[Math.floor(nums.length / 2)]
};

/**
 * 成对删除不相等的元素(摩尔投票法)
 * @param nums
 * 执行用时：88 ms, 在所有 TypeScript 提交中击败了88.05%的用户
 * 内存消耗：41.5 MB, 在所有 TypeScript 提交中击败了62.26%的用户
 */
 function majorityElementTwo(nums: number[]): number {
    let num = nums[0], count = 1 // count为num的个数
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            num = nums[i]
            count += 1
        }
        if (num === nums[i]) {
            count += 1
        } else {
            count -= 1
        }
    }
    return num
};