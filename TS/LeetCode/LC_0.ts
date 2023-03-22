/*
合并区间
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 

提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

作者：力扣 (LeetCode)
链接：https://leetcode.cn/leetbook/read/array-and-string/c5tv3/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
function mergeOne(intervals: number[][]): number[][] {
    const sort = intervals.sort((left, right) => {
        if (left[0] === right[0]) {
            return left[1] - right[1]
        }
        return left[0] - right[0]
    })
    let index = 0
    for (let i = 1; i < sort.length; i++) {
        const item = sort[i]
        const left = item[0]
        const max = sort[index][1]
        if (left <= max) {
            sort[index][1] = Math.max(max, item[1])
        } else {
            index += 1
            sort[index] = item
        }
    }
    return sort.slice(0, index + 1)
};

// 注意排序
function merge(intervals: number[][]): number[][] {
    const sort = intervals.sort((left, right) => left[0] - right[0])
    let index = sort.length - 1
    for (let i = sort.length - 2; i >= 0; i--) {
        const item = sort[i];
        const right = item[1]
        if (right >= sort[index][0]) {
            sort[index][0] = item[0]
            for (let j = sort.length - 1; j >= index; j--) {
                if (right >= sort[j][1]) {
                    sort[j][0] = item[0]
                    sort[j][1] = right
                    index = j
                }
            }
        } else {
            index -= 1
        }
    }
    return sort.slice(index)
};