import UIKit

/*
 
 剑指 Offer 53 - II. 0～n-1中缺失的数字
 
 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

  

 示例 1:

 输入: [0,1,3]
 输出: 2
 示例 2:

 输入: [0,1,2,3,4,5,6,7,9]
 输出: 8
  

 限制：

 1 <= 数组长度 <= 10000

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class Solution {
    
    // 超出时间限制(这种可以处理顺序不对的情况，题目中说了是递增排序数组)
    func missingNumber(_ nums: [Int]) -> Int {
        for key in 0..<nums.count {
            if !nums.contains(key) {
                return key
            }
        }
        return nums.count
    }
    
    // 通过
    func missingNumber2(_ nums: [Int]) -> Int {
        for (key, value) in nums.enumerated() {
            if key != value {
                return key
            }
        }
        return nums.count
    }
}
