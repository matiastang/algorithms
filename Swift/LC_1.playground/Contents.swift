import UIKit

/*
 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 示例:

 给定 nums = [2, 7, 11, 15], target = 9

 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/two-sum
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        guard let sum = twoSum1(nums, target) else {
            return []
        }
        return [sum.0, sum.1]
    }
}

func twoSum1(_ nums: [Int], _ target: Int) -> (Int, Int)? {
    for (key, value) in nums.enumerated() {
        if value > target {
            continue
        }
        var index = -1
        for (keyTwo, valueTwo) in nums.enumerated() {
            if value >= target {
                continue
            }
            if key == keyTwo {
                continue
            }
            if valueTwo + value == target {
                index = keyTwo
                break
            }
        }
        if index != -1 {
            return (key, index)
        }
    }
    return nil
}

func twoSum2(_ nums: [Int], _ target: Int) -> (Int, Int)? {
    let len = nums.count
    for (key, value) in nums.enumerated() {
        if value > target {
            continue
        }
        var index = -1
        let arr = nums[key + 1..<len]
        for (keyTwo, valueTwo) in arr.enumerated() {
            if valueTwo + value == target {
                index = keyTwo + key + 1
                break
            } else {
                continue
            }
        }
        if index != -1 {
            return (key, index)
        }
    }
    return nil
}

func twoSum3(_ nums: [Int], _ target: Int) -> (Int, Int)? {
    let len = nums.count
    for (key, value) in nums.enumerated() {
        var index = -1
        for keyTwo in key + 1..<len {
            if nums[keyTwo] + value == target {
                index = keyTwo
                break
            } else {
                continue
            }
        }
        if index != -1 {
            return (key, index)
        }
    }
    return nil
}

func twoSum4(_ nums: [Int], _ target: Int) -> (Int, Int)? {
    let len = nums.count
    for key in 0..<len {
        let numKey = nums[key]
        for keyTwo in key + 1..<len {
            if numKey + nums[keyTwo] == target {
                return (key, keyTwo)
            }
        }
    }
    return nil
}

twoSum2([0,4,3,0], 0)

func randomArr(_ len: Int = 100) -> [Int] {
    var originalArr = [Int]()
    for _ in 0..<len {
        originalArr.append(Int(arc4random_uniform(100)))
    }
    return originalArr
}

func start(_ originalArr: [Int]) {
    let startTime = Date().timeIntervalSince1970
    print("原始数组：\(originalArr)\n开始时间：\(startTime)")
    let newArr = Solution().twoSum(originalArr, 20)
    let endTime = Date().timeIntervalSince1970
    print("结果数组：\(newArr)\n结束时间：\(endTime)\n耗时：\(endTime - startTime)")
}

//start(randomArr())


