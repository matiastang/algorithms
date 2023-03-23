/*
 * @Author: tangdaoyong
 * @Date: 2023-03-23 23:30:04
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-24 00:09:37
 * @Description: 1630. 等差子数组
 */
/*
1630. 等差子数组
如果一个数列由至少两个元素组成，且每两个连续元素之间的差值都相同，那么这个序列就是 等差数列 。更正式地，数列 s 是等差数列，只需要满足：对于每个有效的 i ， s[i+1] - s[i] == s[1] - s[0] 都成立。

例如，下面这些都是 等差数列 ：

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
下面的数列 不是等差数列 ：

1, 1, 2, 5, 7
给你一个由 n 个整数组成的数组 nums，和两个由 m 个整数组成的数组 l 和 r，后两个数组表示 m 组范围查询，其中第 i 个查询对应范围 [l[i], r[i]] 。所有数组的下标都是 从 0 开始 的。

返回 boolean 元素构成的答案列表 answer 。如果子数组 nums[l[i]], nums[l[i]+1], ... , nums[r[i]] 可以 重新排列 形成 等差数列 ，answer[i] 的值就是 true；否则answer[i] 的值就是 false 。

 

示例 1：

输入：nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
输出：[true,false,true]
解释：
第 0 个查询，对应子数组 [4,6,5] 。可以重新排列为等差数列 [6,5,4] 。
第 1 个查询，对应子数组 [4,6,5,9] 。无法重新排列形成等差数列。
第 2 个查询，对应子数组 [5,9,3,7] 。可以重新排列为等差数列 [3,5,7,9] 。
示例 2：

输入：nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]
输出：[false,true,false,false,true,true]
 

提示：

n == nums.length
m == l.length
m == r.length
2 <= n <= 500
1 <= m <= 500
0 <= l[i] < r[i] < n
-105 <= nums[i] <= 105
*/

function checkArithmeticSubarraysOne(nums: number[], l: number[], r: number[]): boolean[] {
    const ans = [] as boolean[]
    for (let i = 0; i < l.length; i++) {
        const sortList = nums.slice(l[i], r[i] + 1).sort((left, right) => {
            return left - right
        })
        if (sortList.length <= 2) {
            ans.push(true)
            continue
        }
        const diff = sortList[1] - sortList[0]
        let isSort = true
        for (let i = 2; i < sortList.length; i++) {
            if (sortList[i] - sortList[i - 1] !== diff) {
                isSort = false
                break
            }
        }
        ans.push(isSort)
    }
    return ans
};

function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {

    const isDiffArray = (list: number[]) => {
        console.log(list)
        const sortList = list.sort((left, right) => {
            return left - right
        })
        if (sortList.length <= 2) {
            return true
        }
        const diff = sortList[1] - sortList[0]
        for (let i = 2; i < sortList.length; i++) {
            if (sortList[i] - sortList[i - 1] !== diff) {
                return false
            }
        }
        // let sum: number | null = null
        // for (let i = 0, j = sortList.length - 1; i <= j; i++, j--) {
        //     const numi = sortList[i]
        //     const numj = sortList[j]
        //     if (sum !== null) {
        //         if (numi + numj !== sum) {
        //             return false
        //         }
        //     } else {
        //         sum = numi + numj
        //     }        
        // }
        return true
    }

    console.log(isDiffArray(nums.slice(4, 7 + 1)))

    const ans = [] as boolean[]
    for (let i = 0; i < l.length; i++) {
        const leftIndex = l[i]
        const rightIndex = r[i]
        ans.push(isDiffArray(nums.slice(leftIndex, rightIndex + 1)))
    }
    return ans
};

checkArithmeticSubarrays([-3,-6,-8,-4,-2,-8,-6,0,0,0,0], [5,4,3,2,4,7,6,1,7], [6,5,6,3,7,10,7,4,10])