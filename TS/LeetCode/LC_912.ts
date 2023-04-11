/*
 * @Author: tangdaoyong
 * @Date: 2023-04-11 22:08:28
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-04-11 23:51:31
 * @Description: 912. 排序数组
 */
/*
912. 排序数组
给你一个整数数组 nums，请你将该数组升序排列。

 

示例 1：

输入：nums = [5,2,3,1]
输出：[1,2,3,5]
示例 2：

输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
 

提示：

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/
function sortArray(nums: number[]): number[] {
    // for (let i = 0; i < nums.length; i++) {
    //     let temp = i
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[j] < nums[temp]) {
    //             temp = j
    //         }
    //     }
    //     if (i !== temp) {
    //         let tempValue = nums[i]
    //         nums[i] = nums[temp]
    //         nums[temp] = tempValue
    //     }
    // }
    // return nums

    const partition = (left: number, right: number) => {
        let pLeft = left, pRight = right - 1
        if (pLeft === pRight) {
            if (nums[left] > nums[right]) {
                let temp = nums[left]
                nums[left] = nums[right]
                nums[right] = temp
                return
            }
            return
        }
        while (pLeft < pRight) {
            if (nums[pRight] > nums[right]) {
                pRight -= 1
                continue
            }
            if (nums[pLeft] < nums[right]) {
                pLeft += 1
                continue
            }
            let temp = nums[pRight]
            nums[pRight] = nums[pLeft]
            nums[pLeft] = temp
            pRight -= 1
            pLeft += 1
        }
        let tempIndex = pLeft
        if (nums[pLeft] < nums[right]) {
            tempIndex += 1
        }
        let temp = nums[right]
        nums[right] = nums[tempIndex]
        nums[tempIndex] = temp
        if (tempIndex - left > 1) {
            partition(left, tempIndex - 1)
        }
        if (right - tempIndex > 1) {
            partition(tempIndex + 1, right)
        }
    }
    partition(0, nums.length - 1)
    return nums
};