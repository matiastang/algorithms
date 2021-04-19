/*
3. 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let subNumber = 0
    let subStr = ''
    for (const key in s) {
        if (s.hasOwnProperty(key)) {
            const element = s[key];
            console.log(element)
            let index = subStr.indexOf(element)
            if (index === -1) {
                subStr += element
                subNumber = subNumber > subStr.length ? subNumber : subStr.length
            } else {
                subStr = subStr.substr(index + 1) + element
            }
            console.log(subStr)
            console.log(subNumber)
        }
    }
    return subNumber
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function(s) {

    let subNumber = 0
    let subStr = ''
    for (let i = 0; i < s.length; i++) {
        const element = s.charAt(i);
        let index = subStr.indexOf(element)
        if (index === -1) {
            subStr += element
            subNumber = subNumber > subStr.length ? subNumber : subStr.length
        } else {
            subStr = subStr.substr(index + 1) + element
        }
    }
    return subNumber
};

var a = 10;
(async () => {
    var c = await a + 1;
    console.log(c);
})();
a = 0;

/*
await 捕获了值类型，值类型作为参数，调用函数的时候，参数入栈。真正函数中使用的是栈中保存的参数
如果a是引用类型，则是修改之后的
await a + 1;等价于：
(await a) + 1;
和await 1 + a;
是不一样的
await (1 + a);是自己控制了优先级
*/
var a = {
    value: 10
};
(async () => {
    // var c = Promise.resolve(a) + 1;
    // var c = await a + 1;
    // var c = await Promise.resolve(a) + 1;
    // var c = await new Promise((resolve, reject) => {
    //     console.log(`Promise中的a=${a}`);
    //     resolve(a)
    // }).value + 1;
    var c = (await a).value + 1;
    console.log(`c=${c},a=${a.value}`);
})();
console.log('修改之前')
a.value = 0;
console.log('修改之后')



var a = 10;
(async () => {
    // var c = Promise.resolve(a) + 1;
    // var c = await a + 1;
    // var c = await Promise.resolve(a) + 1;
    var c = await new Promise((resolve, reject) => {
        console.log(`Promise中的a=${a}`);
        resolve(a)
    }) + 1;
    console.log(`c=${c},a=${a}`);
})();
console.log('修改之前')
a = 0;
console.log('修改之后')

/*
异步函数中只有await及之后的逻辑是异步的
*/
var a = 10;
(async () => {
    console.log('异步函数')
    var c = await a + 1;
    console.log(`c=${c}`);
})();
console.log('修改之前')
a = 0;
console.log('修改之后')
VM5065:4 c=11
0
var a = 10;
(async () => {
    var c = await 1 + a;
    console.log(`c=${c}`);
})();
a = 0;
VM5105:4 c=1
0
var a = 10;
(async () => {
    var c = await (1 + a);
    console.log(`c=${c}`);
})();
a = 0;
VM5143:4 c=11
0