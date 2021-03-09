/*
 * @Author: tangdaoyong
 * @Date: 2021-03-04 09:24:00
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-08 23:17:51
 * @Description: 最长递增子序列
 */
/*
300. 最长递增子序列
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

进阶：

你可以设计时间复杂度为 O(n2) 的解决方案吗？
你能将算法的时间复杂度降低到 O(n log(n)) 吗?
*/
/**
 * 动态规划
 * @param nums 
 * 执行用时：
152 ms
, 在所有 TypeScript 提交中击败了
72.59%
的用户
内存消耗：
39.5 MB
, 在所有 TypeScript 提交中击败了
100.00%
的用户
 */
function lengthOfLISOne(nums: number[]): number {
    let dp = Array<number>(nums.length)
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        let maxNum = 1
        for (let j = 0; j < i; j++) {
            // 搜索当前位置前面部分最大的增长序列个数(注意需要相等)
            if (nums[j] < nums[i] && maxNum <= dp[j]) {
                maxNum = dp[j] + 1
            }
        }
        dp[i] = maxNum
        if (max < maxNum) {
            max = maxNum
        }
    }
    return max
};

/**
 * 贪心算法+二分查找
 * @param nums 
 */
function lengthOfLISTwo(nums: number[]): number {
    return 0
}
/*
class Solution {
    public int lengthOfLIS(int[] nums) {
        int len = 1, n = nums.length;
        if (n == 0) {
            return 0;
        }
        int[] d = new int[n + 1];
        d[len] = nums[0];
        for (int i = 1; i < n; ++i) {
            if (nums[i] > d[len]) {
                d[++len] = nums[i];
            } else {
                int l = 1, r = len, pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
                while (l <= r) {
                    int mid = (l + r) >> 1;
                    if (d[mid] < nums[i]) {
                        pos = mid;
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
                d[pos + 1] = nums[i];
            }
        }
        return len;
    }
}

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/