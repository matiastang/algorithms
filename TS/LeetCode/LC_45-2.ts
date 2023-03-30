/*
 * @Author: tangdaoyong
 * @Date: 2023-03-30 22:09:43
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-03-30 22:39:51
 * @Description: 45. 跳跃游戏 II
 */
/*
45. 跳跃游戏 II
给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

0 <= j <= nums[i] 
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

 

示例 1:

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
示例 2:

输入: nums = [2,3,0,1,4]
输出: 2
 

提示:

1 <= nums.length <= 104
0 <= nums[i] <= 1000
题目保证可以到达 nums[n-1]
*/
function jump(nums: number[]): number {
     if (nums.length <= 1) {
          return 0
     }
     let ans = Array(nums.length).fill(Number.MAX_SAFE_INTEGER)
     ans[0] = 0
     for (let i = 0; i < nums.length; i++) {
          const item = nums[i];
          if (i + item < nums.length - 1) {
               for (let j = i + 1; j <= i + item; j++) {
                    ans[j] = Math.min(ans[i] + 1, ans[j])
               } 
          } else {
               return ans[i] + 1
          }
     }
     return ans[ans.length - 1]
};