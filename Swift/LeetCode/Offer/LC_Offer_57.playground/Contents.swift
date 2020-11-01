import UIKit

/*
 剑指 Offer 57. 和为s的两个数字
 
 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

  

 示例 1：

 输入：nums = [2,7,11,15], target = 9
 输出：[2,7] 或者 [7,2]
 示例 2：

 输入：nums = [10,26,30,31,47,60], target = 40
 输出：[10,30] 或者 [30,10]
  

 限制：

 1 <= nums.length <= 10^5
 1 <= nums[i] <= 10^6

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class Solution {
    
    func twoSum3(_ nums: [Int], _ target: Int) -> [Int] {
        var left = 0
        var right = nums.count - 1
        while left < right {
            let sum = nums[left] + nums[right]
            if sum == target {
                return [nums[left], nums[right]]
            } else if (sum > target) {
                right -= 1
            } else {
                left += 1
            }
        }
        return []
    }
    
    func twoSum2(_ nums: [Int], _ target: Int) -> [Int] {
        let len = nums.count
        for (key, value) in nums.reversed().enumerated() {
            if value >= Int(target / 2) {
                continue
            }
            let diff = target - value
            if nums[0..<(len - key)].contains(diff) {
                return [value, diff]
            }
        }
        return []
    }
    
    func twoSum1(_ nums: [Int], _ target: Int) -> [Int] {
        for value in nums {
            let diff = target - value
            if nums.contains(diff) {
                return [value, diff]
            }
        }
        return []
    }
    
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        let maxCount = nums.count - 1
        for (key, value) in nums.enumerated() {
            if value >= target {
                return []
            }
            let diff = target - value
            if diff > value {
                for index in (key + 1)...maxCount {
                    if nums[index] == diff {
                        return [value, nums[index]]
                    }
                }
            } else if diff < value {
                for index in 0..<key {
                    if nums[index] == diff {
                        return [value, nums[index]]
                    }
                }
            } else {
                continue
            }
        }
        return []
    }
}
