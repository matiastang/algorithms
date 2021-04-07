/*
 * @Author: tangdaoyong
 * @Date: 2021-04-07 09:14:09
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-07 10:02:59
 * @Description: 搜索旋转排序数组 II
 */
/*
81. 搜索旋转排序数组 II
已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

 

示例 1：

输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
示例 2：

输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false
 

提示：

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-104 <= target <= 104
*/
/**
 * 数与第一个数比较
 * >则，0开始查找，最多找到k<k-1时
 * <则，n-1开始找，最多找到k<K+1时
 * @param nums 
 * @param target 
 * 执行用时：
84 ms
, 在所有 TypeScript 提交中击败了
91.67%
的用户
内存消耗：
39.7 MB
, 在所有 TypeScript 提交中击败了
75.00%
的用户
 */
function search(nums: number[], target: number): boolean {
    if (nums[0] === target) {
        return true
    }
    if (nums.length === 1) {
        return false
    }
    if (nums[0] < target) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === target) {
                return true
            }
            if (nums[i] < nums[i - 1]) {
                return false
            }
        }
        return false
    }
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === target) {
            return true
        }
        if (nums[i] < nums[i - 1]) {
            return false
        }
    }
    return false
};

/**
 * 二分查找
 * @param nums 
 * @param target 
 * @returns 
 * 执行用时：
96 ms
, 在所有 TypeScript 提交中击败了
33.33%
的用户
内存消耗：
39.8 MB
, 在所有 TypeScript 提交中击败了
58.33%
的用户
 */
function searchOne(nums: number[], target: number): boolean {
    if (nums[0] === target) {
        return true
    }
    if (nums.length === 1) {
        return false
    }
    let l = 0
    let r = nums.length - 1
    while (r >= l) {
        let mid = Math.floor((r + l) / 2)
        if (nums[mid] === target) {
            return true
        }
        // 元素可能重复，特殊情况处理
        if (nums[l] == nums[mid] && nums[mid] == nums[r]) {
            ++l;
            --r;
        } else if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return false
};