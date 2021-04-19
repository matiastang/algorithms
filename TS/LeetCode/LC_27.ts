/*
 * @Author: tangdaoyong
 * @Date: 2021-04-19 09:14:11
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-19 09:33:30
 * @Description: 移除元素
 */
/*
27. 移除元素
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

示例 1：

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
示例 2：

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
*/
/**
 * 循环删除
 * @param nums 
 * @param val 
 * @returns 
 * 执行用时：92 ms, 在所有 TypeScript 提交中击败了50.60%的用户
 * 内存消耗：39.5 MB, 在所有 TypeScript 提交中击败了52.19%的用户
 */
function removeElement(nums: number[], val: number): number {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            continue
        }
        i += 1
    }
    return nums.length
};

/**
 * 不相等的元素前移，使用一个值记录长度
 * @param nums 
 * @param val 
 * @returns 
 * 执行用时：92 ms, 在所有 TypeScript 提交中击败了50.60%的用户
 * 内存消耗：39.5 MB, 在所有 TypeScript 提交中击败了52.19%的用户
 */
 function removeElementOne(nums: number[], val: number): number {
    let len = 0
    let i = 0
    while (i < nums.length) {
        if (nums[i] !== val) {
            if (i !== len) {
                /*
                执行用时：92 ms, 在所有 TypeScript 提交中击败了50.60%的用户
                内存消耗：39.5 MB, 在所有 TypeScript 提交中击败了43.43%的用户
                */
                [nums[i], nums[len]] = [nums[len], nums[i]]
                /*
                执行用时：108 ms, 在所有 TypeScript 提交中击败了7.17%的用户
                内存消耗：39.5 MB, 在所有 TypeScript 提交中击败了53.79%的用户
                */
                // let temp = nums[i]
                // nums[i] = nums[len]
                // nums[len] = temp
            }
            len += 1
        }
        i += 1
    }
    return len
};