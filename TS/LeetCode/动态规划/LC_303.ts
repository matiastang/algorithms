/*
 * @Author: tangdaoyong
 * @Date: 2021-03-02 10:04:17
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-02 17:47:21
 * @Description: 区域和检索 - 数组不可变
 */
/*
303. 区域和检索 - 数组不可变
给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

实现 NumArray 类：

NumArray(int[] nums) 使用数组 nums 初始化对象
int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
 

示例：

输入：
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
输出：
[null, 1, -1, -3]

解释：
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
 

提示：

0 <= nums.length <= 104
-105 <= nums[i] <= 105
0 <= i <= j < nums.length
最多调用 104 次 sumRange 方法
*/
/**
 * 136 ms	45.1 MB	TypeScript
 */
class NumArray {

    /**
     * 缓存一维前缀
     */
    // sums: Array<number>;//136 ms	45.1 MB	TypeScript
    // sums = Array<number>();//144 ms	45.4 MB	TypeScript
    sums: Array<number>//136 ms	44.8 MB	TypeScript
    
    constructor(nums: number[]) {
        // let sum = 0;
        // this.sums = Array<number>(nums.length);
        // for (let i = 0; i < nums.length; i++) {
        //     sum += nums[i]
        //     this.sums[i] = sum
        // }

        // let sum = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     sum += nums[i]
        //     this.sums.push(sum)
        // }

        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
            nums[i] = sum
        }
        this.sums = nums
    }

    sumRange(i: number, j: number): number {
        if (i === 0) {
            return this.sums[j]
        }
        return this.sums[j] - this.sums[i - 1]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */