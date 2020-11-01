import UIKit

/*
 剑指 Offer 42. 连续子数组的最大和
 
 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

 要求时间复杂度为O(n)。

  

 示例1:

 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
  

 提示：

 1 <= arr.length <= 10^5
 -100 <= arr[i] <= 100
 注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class Solution {
    
    func maxSubArray2(_ nums: [Int]) -> Int {
        var sum = 0
        var maxNumber = Int.min
        for value in nums {
            if value > 0 {
                sum += value
            } else {
                sum = value
            }
            maxNumber = max(maxNumber, sum)
        }
        return maxNumber
    }
    
    func maxSubArray(_ nums: [Int]) -> Int {
        guard let fitstNumber = nums.first else {
            print("数组异常len=\(nums.count)")
            return 0
        }
        if nums.count == 1 {
            return fitstNumber
        }
        guard let lastNumber = nums.last else {
            print("数组异常len=\(nums.count)")
            return 0
        }
        var left = 1
        var right = nums.count - 2
        var leftSum = fitstNumber
        var rightSum = lastNumber
        while true {
            if left > right {
                return max(leftSum, leftSum + rightSum, rightSum)
            }
            if left == right {
                return max(leftSum + nums[left], leftSum + rightSum + nums[left], rightSum + nums[left], max(leftSum, rightSum))
            }
            if nums[left] + leftSum <= 0 {
                leftSum = 0
            } else {
                leftSum += nums[left]
            }
            if nums[right] + rightSum <= 0 {
                rightSum = 0
            } else {
                rightSum += nums[right]
            }
            left += 1
            right -= 1
        }
    }
}
