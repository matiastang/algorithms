/*
 * @Author: tangdaoyong
 * @Date: 2021-04-20 09:08:27
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-20 09:26:43
 * @Description: 实现 strStr()
 */
/*
28. 实现 strStr()
实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

 

说明：

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

 

示例 1：

输入：haystack = "hello", needle = "ll"
输出：2
示例 2：

输入：haystack = "aaaaa", needle = "bba"
输出：-1
示例 3：

输入：haystack = "", needle = ""
输出：0
 

提示：

0 <= haystack.length, needle.length <= 5 * 104
haystack 和 needle 仅由小写英文字符组成
*/
/**
 * 暴力解
 * @param haystack 
 * @param needle 
 * @returns 
 * 执行用时：100 ms, 在所有 TypeScript 提交中击败了31.52%的用户
 * 内存消耗：41.3 MB, 在所有 TypeScript 提交中击败了13.62%的用户
 */
function strStr(haystack: string, needle: string): number {
    // 特殊处理
    let strLen = haystack.length;
    let searchStrLen = needle.length;
    if (searchStrLen <= 0) {
        return 0;
    }
    if ( strLen <= 0 || searchStrLen > strLen ) {
        return -1;
    }
    // 循环移动比较
    for (let index = 0; index < haystack.length; index++) {
        // 剩余长度小于searchStrLen，比较肯定不成功，直接退出
        if (index > strLen - searchStrLen) {
            return -1;
        }
        // 循环比较
        // 标识
        let success = true;
        for (let searchIndex = 0; searchIndex < needle.length; searchIndex++) {
            const element = haystack[index + searchIndex];
            const searchElement = needle[searchIndex];
            if (searchElement != element) {
                success = false;
                break;
            }
        }
        // 判断是否成功
        if (success) {
            return index;
        }
    }
    // 可以不用写这个return肯定不会走到这儿
    return -1;
};
/**
 * 使用KMP算法
 * @param haystack 
 * @param needle 
 * @returns 
 * 执行用时：104 ms, 在所有 TypeScript 提交中击败了25.29%的用户
 * 内存消耗：42 MB, 在所有 TypeScript 提交中击败了5.06%的用户
 */
function strStrOne(haystack: string, needle: string): number {
    if (needle === '') {
        return 0
    }
    if (haystack === '') {
        return -1
    }
    return kmpSearchSubString(haystack, needle)
};

/**
 * @description: KMP算法
 * @param {String} str 目标字符串
 * @param {String} searchStr 搜索字符串
 * @return {number}
 */
function kmpSearchSubString(str: String, searchStr: String ): number {
    // 特殊处理
    let strLen = str.length;
    let searchStrLen = searchStr.length;
    if ( strLen <= 0 || searchStrLen <= 0 || searchStrLen > strLen ) {
        return -1;
    }
    // 获取pmt数组
    let nextArr = getPMTArray(searchStr);
    // 循环移动比较
    let i = 0, j = 0;
    while (i <= strLen && j < searchStrLen) {
        // console.log(`i=${i},j=${j}`)
        // 首位失配或者匹配成功，i、j都向后移动一位
        if (j === -1 || str[i] === searchStr[j]) {
            i += 1;
            j += 1;
        } else {
            j = nextArr[j];
        }
    }
    // 匹配成功则j === searchStrLen，注意不是searchStrLen-1，具体看j += 1
    if (j === searchStrLen) {
        return i - j;
    }
    return -1;
}

/**
 * @description: 求PMT数组
 * @param {String} str 
 * @return {number[]}
 */
 function getPMTArray(str: String): number[] {
    let arr = [-1];
    // 前置判断
    if (str.length <= 0) {
        return arr;
    }
    let i = 0, j = -1;
    while (i < str.length) {
        if (j === -1 || str[i] === str[j]) {
            i += 1;
            j += 1;
            arr.push(j);
        } else {
            j = arr[j];
        }
    }
    return arr;
}