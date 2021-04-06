/*
 * @Author: tangdaoyong
 * @Date: 2021-04-06 09:27:12
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-06 10:00:11
 * @Description: 删除有序数组中的重复项 II
 */
/*
80. 删除有序数组中的重复项 II
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 

说明：

为什么返回数值是整数，但输出的答案是数组呢？

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

示例 1：

输入：nums = [1,1,1,2,2,3]
输出：5, nums = [1,1,2,2,3]
解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。 不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,1,2,3,3]
输出：7, nums = [0,0,1,1,2,3,3]
解释：函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。 不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按升序排列
*/
function removeDuplicates(nums: number[]): number {
    nums = nums.filter((num, index, array) => {
        return index < 2 || array[index - 1] !== num || array[index - 2] !== num
    })
    return nums.length
};

/**
 * 
 * @param nums 
 * @returns 
 * 执行用时：
92 ms
, 在所有 TypeScript 提交中击败了
82.35%
的用户
内存消耗：
39.9 MB
, 在所有 TypeScript 提交中击败了
50.00%
的用户
 */
function removeDuplicatesOne(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length
    }
    let i = 2
    while (i < nums.length) {
        if (nums[i - 1] !== nums[i] || nums[i - 2] !== nums[i]) {
            i += 1
            continue
        }
        /**
         * 使用splice函数进行移除：
         * splice函数的第二个参数指删除的数目。（方法内实现过程）splice直接修改原数组，并把删除的所有元素以另一个新数组的方式返回。
         */
        nums.splice(i, 1)
    }
    return i
};