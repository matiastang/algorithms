/*
 * @Author: tangdaoyong
 * @Date: 2023-03-26 23:48:05
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-28 00:00:19
 * @Description: 16. 最接近的三数之和
 */
/*
16. 最接近的三数之和
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

 

示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
示例 2：

输入：nums = [0,0,0], target = 1
输出：0
 

提示：

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/
function threeSumClosestOne(nums: number[], target: number): number {
    if (nums.length === 3) {
        return nums[0] + nums[1] + nums[2]
    }
    const sortNumbs = nums.sort((left, right) => {
        return left - right
    })
    let allSum = 0
    for (let i = 0; i < sortNumbs.length - 2; i++) {
        const item = sortNumbs[i];
        let left = i + 1
        let right = sortNumbs.length - 1
        while (left < right) {
            const next = item + sortNumbs[left] + sortNumbs[right]
            if (next === target) {
                return next
            } else if (next > target) {
                right -= 1
            } else {
                left += 1
            }
            if (i === 0 || Math.abs(next - target) < Math.abs(allSum - target)) {
                allSum = next
            }
        }
    }
    return allSum
}
function threeSumClosest(nums: number[], target: number): number {
    if (nums.length === 3) {
        return nums[0] + nums[1] + nums[2]
    }
    const sortNumbs = nums.sort((left, right) => {
        return left - right
    })
    let sum = sortNumbs[0] + sortNumbs[1] + sortNumbs[2]
    if (sum >= target) {
        return sum
    }
    for (let i = 3; i < sortNumbs.length; i++) {
        let preSum = sum
        for (let j = 1; j <= 3; j++) {
            const nextSum = sum + sortNumbs[i] - sortNumbs[i - j]
            if (nextSum === target) {
                return nextSum
            }
            if (nextSum > target) {
                return Math.abs(nextSum - target) > Math.abs(target - preSum) ? preSum : nextSum
            }
            preSum = nextSum
        }
        sum = sum + sortNumbs[i] - sortNumbs[i - 3]
    }
    return sum
};