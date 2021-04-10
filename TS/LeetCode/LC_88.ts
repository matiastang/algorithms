/*
 * @Author: tangdaoyong
 * @Date: 2021-04-10 11:20:00
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-10 12:06:48
 * @Description: 88. 合并两个有序数组
 */
/*
88. 合并两个有序数组
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

 

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
 

提示：

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
*/
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n === 0) return
    if (m === 0) {
        nums1.splice(m, n, ...nums2)
        return
    }
    nums1.splice(m, n)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (j === 0 && nums2[i] <= nums1[j]) {
                nums1.unshift(nums2[i])
                break
            }
            if (j === nums1.length - 1 && nums2[i] >= nums1[j]) {
                nums1.push(nums2[i])
                break
            }
            if (nums2[i] >= nums1[j - 1] && nums2[i] <= nums1[j]) {
                nums1.splice(j - 1, 0, nums2[i])
                break
            }
            if (nums2[i] >= nums1[j + 1] && nums2[i] >= nums1[j]) {
                nums1.splice(j, 0, nums2[i])
                break
            }
        }  
    }
    // nums1.splice(m + n - 1, n)
    console.log(nums1)
};

/**
 * 执行用时：
104 ms
, 在所有 TypeScript 提交中击败了
12.17%
的用户
内存消耗：
40.9 MB
, 在所有 TypeScript 提交中击败了
5.21%
的用户
 * @param nums1 
 * @param m 
 * @param nums2 
 * @param n 
 * @returns 
 */
function mergeOne(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n === 0) return
    if (m === 0) {
        nums1.splice(m, n, ...nums2)
        return
    }
    let arr = []
    let lenOne = 0
    let lenTwo = 0
    while (lenOne < m || lenTwo < n) {
        if (lenOne >= m) {
            arr.push(...nums2.slice(lenTwo, n))
            break
        }
        if (lenTwo >= n) {
            arr.push(...nums1.slice(lenOne, m))
            break
        }
        if (nums1[lenOne] < nums2[lenTwo]) {
            arr.push(nums1[lenOne])
            lenOne += 1
        } else if (nums1[lenOne] > nums2[lenTwo]) {
            arr.push(nums2[lenTwo])
            lenTwo += 1
        } else {
            arr.push(nums1[lenOne])
            arr.push(nums2[lenTwo])
            lenTwo += 1
            lenOne += 1
        }
    }
    nums1.splice(0, m + n, ...arr)
};

/**
 * 
 * @param nums1 
 * @param m 
 * @param nums2 
 * @param n 
 * @returns 
 * 执行用时：
72 ms
, 在所有 TypeScript 提交中击败了
99.71%
的用户
内存消耗：
39.2 MB
, 在所有 TypeScript 提交中击败了
93.91%
的用户
 */
function mergeTwo(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n === 0) return
    nums1.splice(m, n, ...nums2)
    nums1.sort((left, right) => {
        return left > right ? 1 : -1
    })
};