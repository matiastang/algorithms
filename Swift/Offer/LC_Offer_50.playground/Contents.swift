import UIKit

/*
 剑指 Offer 50. 第一个只出现一次的字符
 
 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

 示例:

 s = "abaccdeff"
 返回 "b"

 s = ""
 返回 " "
  

 限制：

 0 <= s 的长度 <= 50000

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class Solution {
    
    func firstUniqChar(_ s: String) -> Character {
        let mapStr = s.map { (value) -> Character in
            return value
        }
        print(mapStr)
        if mapStr.count <= 1 {
            return mapStr.first ?? " "
        }
        let maxCount = mapStr.count - 1
        for (key, value) in mapStr.enumerated() {
            if key == 0 {
                let right = mapStr[(key + 1)...maxCount]
                if !right.contains(value) {
                    return value
                }
                continue
            }
            if key == maxCount {
                let left = mapStr[0..<key]
                if !left.contains(value) {
                    return value
                }
                continue
            }
            let left = mapStr[0..<key]
            let right = mapStr[(key + 1)...maxCount]
            if !left.contains(value) && !right.contains(value) {
                return value
            }
        }
        return " "
    }
    
    func firstUniqChar3(_ s: String) -> Character {
        let mapStr = s.map { (value) -> Character in
            return value
        }
        print(mapStr)
        if mapStr.count <= 1 {
            return mapStr.first ?? " "
        }
        let maxCount = mapStr.count - 1
        for (key, value) in mapStr.enumerated() {
            if key == 0 {
                let right = mapStr[(key + 1)...maxCount]
                if !right.contains(value) {
                    return value
                }
                continue
            }
            if key == maxCount {
                let left = mapStr[0..<key]
                if !left.contains(value) {
                    return value
                }
                continue
            }
            let left = mapStr[0..<key]
            let right = mapStr[(key + 1)...maxCount]
            if !left.contains(value) && !right.contains(value) {
                return value
            }
        }
        return " "
    }
    
    func firstUniqChar2(_ s: String) -> Character {
        let sortStr = s.sorted { (left, right) -> Bool in
            return left > right
        }
        print(sortStr)
        if sortStr.count <= 0 {
            return sortStr.first!
        }
        for (key, value) in sortStr.enumerated() {
            if key == 0 {
                if sortStr[key + 1] != value {
                    return value
                }
                continue
            }
            if key == sortStr.count - 1 {
                if sortStr[key - 1] != value {
                    return value
                }
                continue
            }
            let left = sortStr[key - 1]
            let right = sortStr[key + 1]
            if left != value && right != value {
                return value
            }
        }
        return " "
    }
}
