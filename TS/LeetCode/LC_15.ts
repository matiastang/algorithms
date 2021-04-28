/*
 * @Author: tangdaoyong
 * @Date: 2021-04-28 14:29:23
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-28 15:49:00
 * @Description: 三数之和
 */
/*
15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 

提示：

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
/**
 * 
 * @param nums 
 * @returns 
 * 执行用时：464 ms, 在所有 TypeScript 提交中击败了11.69%的用户
 * 内存消耗：49.6 MB, 在所有 TypeScript 提交中击败了13.31%的用户
 */
function threeSum(nums: number[]): number[][] {
    // 排序
    nums = nums.sort((left, right) => {
        return left > right ? 1 : -1
    })
    let ans = new Set<String>()
    for (let i = 0; i < nums.length; i++) {
        // 固定一位
        // 双指针查找另外两个数
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
                right -= 1
            } else if (sum < 0) {
                left += 1
            } else {
                let indexStr = `${nums[i]},${nums[left]},${nums[right]}`
                // 去重
                if (!ans.has(indexStr)) {
                    ans.add(indexStr)
                }
                right -= 1
                left += 1
            }
        }
    }
    // 组装
    return [...ans].map((indexStr) => {
        let indexArr = indexStr.split(',')
        return [parseInt(indexArr[0]), parseInt(indexArr[1]), parseInt(indexArr[2])]
    })
};

/**
 * 
 * @param nums 
 * @returns 
 * 执行用时：164 ms, 在所有 TypeScript 提交中击败了87.66%的用户
 * 内存消耗：48 MB, 在所有 TypeScript 提交中击败了82.79%的用户
 */
function threeSumOne(nums: number[]): number[][] {
    // 排序
    nums = nums.sort((left, right) => {
        return left - right
    })
    let ans = Array<Array<number>>()
    for (let i = 0; i < nums.length; i++) {
        // 固定一位
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        // 双指针查找另外两个数
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
                right -= 1
            } else if (sum < 0) {
                left += 1
            } else {
                ans.push([nums[i],nums[left],nums[right]])
                for(left++;left < right && nums[left] === nums[left - 1];left++);
            }
        }
    }
    return ans
};