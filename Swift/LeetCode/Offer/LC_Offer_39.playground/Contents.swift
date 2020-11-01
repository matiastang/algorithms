import UIKit

/*
 剑指 Offer 39. 数组中出现次数超过一半的数字
 
 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

  

 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

  

 示例 1:

 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
 输出: 2
  

 限制：

 1 <= 数组长度 <= 50000

  

 注意：本题与主站 169 题相同：https://leetcode-cn.com/problems/majority-element/

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class Solution {
    
    //排序取中位数
    //时间O(nlogn)，空间O(1)
    func majorityElement(_ nums: [Int]) -> Int {
        return nums.sorted { (left, right) -> Bool in
            return left < right
        }[nums.count / 2]
    }
    
    //哈希表法
    //时间O(n)，空间O(n/2)
    func majorityElement2(_ nums: [Int]) -> Int {
        var dic = [Int : Int]()
        for value in nums {
            if let number = dic[value] {
                dic[value]! += 1
                if number >= nums.count / 2 {
                    return value
                }
            } else {
                dic[value] = 1
            }
        }
        return -1
    }
    
    //摩尔投票法
    //也可以理解成混战极限一换一，不同的两者一旦遇见就同归于尽，最后活下来的值都是相同的，即要求的结果
    //时间O(n)，空间O(1)
    func majorityElement3(_ nums: [Int]) -> Int {
        guard let first = nums.first else {
            return -1
        }
        var number = first
        var count = 1
        for key in 1..<nums.count {
            if count == 0 {
                number = nums[key]
                count += 1
            } else {
                if number != nums[key] {
                    count -= 1
                } else {
                    count += 1
                }
            }
        }
        return number
    }
}
