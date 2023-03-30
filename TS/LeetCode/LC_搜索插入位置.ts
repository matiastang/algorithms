/*
 * @Author: tangdaoyong
 * @Date: 2023-03-28 00:03:25
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-30 19:49:22
 * @Description: 搜索插入位置
 */
/*
LC 搜索插入位置
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
 

提示:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为 无重复元素 的 升序 排列数组
-104 <= target <= 104

作者：力扣 (LeetCode)
链接：https://leetcode.cn/leetbook/read/array-and-string/cxqdh/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
function searchInsert(nums: number[], target: number): number {
    if (target <= nums[0]) {
        return 0
    }
    if (target >= nums[nums.length - 1]) {
        return nums.length
    }
    let leftIndex = 0
    let rightIndex = nums.length - 1
    while (leftIndex < rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (leftIndex >= midIndex) {
            return leftIndex + 1
        }
        if (rightIndex <= midIndex) {
            return rightIndex
        }
        if (nums[midIndex] === target) {
            return midIndex
        } else if (nums[midIndex] > target) {
            rightIndex = midIndex
        } else {
            leftIndex = midIndex
        }
    }
    return leftIndex + 1
};