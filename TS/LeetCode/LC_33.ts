/*
 * @Author: tangdaoyong
 * @Date: 2021-04-07 09:35:40
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-07 09:55:31
 * @Description: 搜索旋转排序数组
 */
/*
33. 搜索旋转排序数组
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

 

示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1
 

提示：

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
nums 中的每个值都 独一无二
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-10^4 <= target <= 10^4
 

进阶：你可以设计一个时间复杂度为 O(log n) 的解决方案吗？
*/
/**
 * 思路同81. 搜索旋转排序数组 II
 * 因为数组中的每个值都 独一无二，所以可以使用下标返回
 * @param nums 
 * @param target 
 * 执行用时：
88 ms
, 在所有 TypeScript 提交中击败了
80.29%
的用户
内存消耗：
39.4 MB
, 在所有 TypeScript 提交中击败了
76.64%
的用户
 */
function search(nums: number[], target: number): number {
    if (nums[0] === target) {
        return 0
    }
    if (nums.length === 1) {
        return -1
    }
    if (nums[0] < target) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === target) {
                return i
            }
            if (nums[i] < nums[i - 1]) {
                return -1
            }
        }
        return -1
    }
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === target) {
            return i
        }
        if (nums[i] < nums[i - 1]) {
            return -1
        }
    }
    return -1
};

/**
 * 二分查找
 * @param nums 
 * @param target 
 * @returns 
 * 执行用时：
100 ms
, 在所有 TypeScript 提交中击败了
21.90%
的用户
内存消耗：
39.4 MB
, 在所有 TypeScript 提交中击败了
71.53%
的用户
 */
function searchOne(nums: number[], target: number): number {
    if (nums[0] === target) {
        return 0
    }
    if (nums.length === 1) {
        return -1
    }
    let l = 0
    let r = nums.length - 1
    while (r >= l) {
        let mid = Math.floor((r + l) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[nums.length - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1
};