/*
 * @Author: tangdaoyong
 * @Date: 2021-04-19 09:52:51
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-19 10:28:57
 * @Description: 存在重复元素 II
 */
/*
219. 存在重复元素 II
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

 

示例 1:

输入: nums = [1,2,3,1], k = 3
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1
输出: true
示例 3:

输入: nums = [1,2,3,1,2,3], k = 2
输出: false
*/
/**
 * 循环查找，在下标i查找下标i-k到i+k
 * @param nums 
 * @param k 
 * 执行用时：4608 ms, 在所有 TypeScript 提交中击败了6.56%的用户
 * 内存消耗：41.9 MB, 在所有 TypeScript 提交中击败了77.05%的用户
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i - k > 0 ? i - k : 0
        for (let j = minIndex; j < i; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
        let maxIndex = nums.length > i + k ? i + k : nums.length
        for (let j = i + 1; j <= maxIndex; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
};

/**
 * 循环查找，在下标i查找下标i+1到i+k
 * @param nums 
 * @param k 
 * 执行用时：4340 ms, 在所有 TypeScript 提交中击败了8.20%的用户
 * 内存消耗：41.1 MB, 在所有 TypeScript 提交中击败了95.08%的用户
 */
function containsNearbyDuplicateOne(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        let maxIndex = nums.length > i + k ? i + k : nums.length
        for (let j = i + 1; j <= maxIndex; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
};

/**
 * 使用哈希表保存固定长度（k）的数据
 * @param nums 
 * @param k 
 * @returns 
 * 执行用时：104 ms, 在所有 TypeScript 提交中击败了52.46%的用户
 * 内存消耗：43.8 MB, 在所有 TypeScript 提交中击败了63.94%的用户
 */
function containsNearbyDuplicateTwo(nums: number[], k: number): boolean {
    let tempSet = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        if (tempSet.has(nums[i])) {
            return true
        }
        tempSet.add(nums[i])
        if (tempSet.size > k) {
            tempSet.delete(nums[i - k])
        }
    }
    return false
};