/*
 * @Author: tangdaoyong
 * @Date: 2021-05-07 10:22:17
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-07 10:29:55
 * @Description: 随机数索引
 */
/*
398. 随机数索引
给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。

注意：
数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。

示例:

int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) 应该返回索引 2,3 或者 4。每个索引的返回概率应该相等。
solution.pick(3);

// pick(1) 应该返回 0。因为只有nums[0]等于1。
solution.pick(1);
*/
/**
 * 蓄水池抽样算法
 * 执行用时：160 ms, 在所有 TypeScript 提交中击败了100.00%的用户
 * 内存消耗：47.5 MB, 在所有 TypeScript 提交中击败了100.00%的用户
 */
class Solution {

    nums = Array<number>()

    constructor(nums: number[]) {
        this.nums = nums
    }

    pick(target: number): number {
        let ans = 0, count = 0, index = 0
        while (index < this.nums.length) {
            // 过滤不等于target
            if (this.nums[index] !== target) {
                index += 1
                continue
            }
            // 相等则概率保存坐标位置
            count += 1
            let temp = Math.floor(Math.random() * count)
            if (temp === 0) {// 模拟概率1/n
                ans = index
            }
            index += 1
        }
        return ans
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */