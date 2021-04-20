<!--
 * @Author: tangdaoyong
 * @Date: 2021-02-20 09:33:17
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-02-20 10:05:06
 * @Description: KMP算法
-->
<!-- TOC -->

- [KMP算法](#kmp算法)
    - [暴力算法](#暴力算法)
        - [介绍](#介绍)
        - [实现](#实现)
    - [KMP算法](#kmp算法-1)
        - [介绍](#介绍-1)
        - [前缀和后缀](#前缀和后缀)
        - [PMT数组](#pmt数组)
        - [KMP算法原理](#kmp算法原理)
        - [实现](#实现-1)
            - [求PMT数组](#求pmt数组)
            - [KMP算法实现](#kmp算法实现)
        - [总结](#总结)
    - [延申](#延申)

<!-- /TOC -->
# KMP算法

## 暴力算法

### 介绍

`暴力匹配算法`匹配的过程为，从 `S` 的第一个字符开始的 `len(M)` 个字符串与 `M` 进行匹配，如果匹配成功则返回位置，如果不成功则从 `S` 的第二个字符开始的 `len(M)` 个字符串与 `M` 进行匹配，循环向后进行匹配判断，直到剩余的字符串长度小于 `len(M)`，返回匹配失败。

* `S`为目标字符串
* `M`为搜索字符串
* `i` 表示扫描的 `S` 的字符位置
* `j` 表示扫描的 `M` 的字符位置

`暴力匹配算法`暴力算法的时间复杂度为：`(len(S)-(len(M)-1))*len(M)`即： `O(S*M)`。

### 实现
```ts
/**
 * @description: 暴力匹配
 * @param {String} str 目标字符串
 * @param {String} searchStr 搜索字符串
 * @return {number}
 */
function searchSubString(str: String, searchStr: String ): number {
    // 特殊处理
    let strLen = str.length;
    let searchStrLen = searchStr.length;
    if ( strLen <= 0 || searchStrLen <= 0 || searchStrLen > strLen ) {
        return -1;
    }
    // 循环移动比较
    for (let index = 0; index < str.length; index++) {
        // 剩余长度小于searchStrLen，比较肯定不成功，直接退出
        if (index > strLen - searchStrLen) {
            return -1;
        }
        // 循环比较
        // 标识
        let success = true;
        for (let searchIndex = 0; searchIndex < searchStr.length; searchIndex++) {
            const element = str[index + searchIndex];
            const searchElement = searchStr[searchIndex];
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
}
```

## KMP算法

### 介绍

`KMP(Knuth-Morris-Pratt)` 算法是一种常见的字符串匹配算法，在主字符串 `S` 中查找字符串 `M` 出现的起始位置，通过 `M` 的自身信息来减少无效的查询次数。

```txt
暴力算法
pattern  B A A A A A A A A

                           i
                           |   
txt      A  B  A  A  A  A  B  A  A  A  A  A  A
            B  A  A  A  A  A 
               B  A  A  A  A  A 
                  B  A  A  A  A  A 
                     B  A  A  A  A  A  
                        B  A  A  A  A  A 
                           B  A  A  A  A  A   --> 匹配成功
KMP算法
                           i->i+1
                           |  |
txt      A  B  A  A  A  A  B  A  A  A  A  A  A
            B  A  A  A  A  A 
                           B  A  A  A  A  A   --> 匹配成功
```
`KMP` 算法的主要思想就是提前判断如何重新开始匹配，而这种判断只取决于模式字符串本身，与目标文本没有关系。

### 前缀和后缀

* `前缀`：对于字符串 `A` 和 `B` ，如果存在 `A = BS`, 其中`S`是一个任意的非空字符串，那么我们就称 `B` 是 `A` 的前缀
* `后缀`：对于字符串 `A` 和 `B` ，如果存在 `A = SB`，其中`S`是一个任意的非空字符串，那么我们就称 `B` 是 `A` 的后缀
如：字符串 `ABABCB`
* 前缀： `{'A', 'AB', 'ABA', 'ABAB', 'ABABC'}`
* 后缀： `{'B', 'CB', 'BCB', 'ABCB", 'BABCB'}`

### PMT数组

`PMT数组`即：部分匹配表(Partial Match Table)数组

对于一个字符串 'ABABABCA', 它的PMT表如下

char	A	B	A	B	A	B	C	A
index	0	1	2	3	4	5	6	7
value	0	0	1	2	3	4	0	1
PMT数组中值的定义：字符串的前缀集合与后缀集合的交集中最长元素的长度。
例子： 对于字符串 ABAB
前缀集合： {'A', 'AB', 'ABA'}
后缀集合： {'B', 'AB', 'BAB'}
前缀集合与后缀集合的交集是 'AB', 长度是2，因此PMT数组中的值是2

### KMP算法原理

KMP算法使用(Partial Match Table)数组重新匹配。减少了匹配次数。
例子： 在文本字符串 'ABCAABABABABCABA' 中查找模式字符串 'ABABABCA'
```txt
                      i=6
                      |
    A  B  A  B  A  B  A  B  A  B  C  A  B  A
    A  B  A  B  A  B  C  A
                      |
                      j=6
```                      
在 i 处失配，意味着 文本字符串中 i 指针之前的 PMT[j −1] 位就一定与模式字符串的第 0 位至第 PMT[j−1] 匹配， 在这里是 ABABAB。
这个字符串的前缀集合是{'A', 'AB', 'ABA', 'ABAB', 'ABABA'}, 后缀集合是{'B', 'AB','BAB', 'ABAB', 'BABAB'}, 它们的交集是'ABAB'。
这就说明文本字符串中， i 所在位置之前的4位和模式字符串的0到4位是相同的,因此我们可以省略掉这些字符串的比较----保持 i = 6 不动, 将 j 指向模式字符串的PMT[j-1] (此处为4)位即可
```txt
                      i=6
                      |
    A  B  A  B  A  B  A  B  A  B  C  A  B  A
          A  B  A  B  A  B  C  A
                      |
                      j=4
```

### 实现

#### 求PMT数组

求`PMT`数组的过程可以看成字符串匹配的过程：
从模式字符串的第一位(不包括第0位)开始对自身进行匹配运算。 在任一位置，能匹配的最长长度就是当前位置的`PMT`值。如下图所示
```txt
                                 pmt[0] = 0 => next[1] = 0
                                 
   i
   |
A  B  A  B  A  B  C  A           
   A  B  A  B  A  B  C  A        pmt[1] = 0 => next[2] = 0
   |
   j


      i
      |
A  B  A  B  A  B  C  A
      A  B  A  B  A  B  C  A     pmt[2] = 1 => next[3] = 1
      |
      j

         i
         |
A  B  A  B  A  B  C  A
      A  B  A  B  A  B  C  A     pmt[3] = 2 => next[4] = 2
         |
         j

            i
            |
A  B  A  B  A  B  C  A
      A  B  A  B  A  B  C  A     pmt[4] = 3 => next[5] = 3
            |
            j

               i
               |
A  B  A  B  A  B  C  A
      A  B  A  B  A  B  C  A     pmt[5] = 4 => next[6] = 4
               |
               j

                  i
                  |
A  B  A  B  A  B  C  A
      A  B  A  B  A  B  C  A     pmt[6] = 0 => next[7] = 0
                  |
                  j
```
在第 j 位失配时，我们实际上是取第 j-1位的PMT值，为了方便,我们可以将PMT数组向后偏移一位,得到一个数组，称为next数组：

char	A	B	A	B	A	B	C	A
index	0	1	2	3	4	5	6	7
value	0	0	1	2	3	4	0	1
next	-1	0	0	1	2	3	4	0

**理解**求解`PMT数组`的过程即是求解当匹配失败时，需要向后移动多少位，可以再次保证前面的匹配成功，只比较后续的就可以了，实际算法中只是指针的移动。
```ts
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
```
#### KMP算法实现

* 有了`PMT`数组之后，在匹配失败的时候，移动指针到`PMT`数组对应的位置即可。

```ts
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
```

*注意*：
当 searchStr 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
当 searchStr 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。js中的 indexOf()同样如此。
### 总结

先看一个测试比对结果。
```ts
// 暴力解
i=0,j=0
i=0,j=1
i=0,j=2
i=0,j=3
i=0,j=4
i=0,j=5
i=0,j=6
i=0,j=7
i=1,j=0
i=2,j=0
i=3,j=0
i=4,j=0
i=4,j=1
i=4,j=2
i=4,j=3
i=5,j=0
i=6,j=0
i=7,j=0
i=8,j=0
i=8,j=1
i=8,j=2
i=8,j=3
i=8,j=4
i=8,j=5
i=8,j=6
i=8,j=7
8
// KMP算法
[ -1, 0, 0, 1, 2, 3, 4, 0, 1 ]
i=0,j=0
i=1,j=1
i=2,j=2
i=3,j=3
i=4,j=4
i=5,j=5
i=6,j=6
i=7,j=7
i=7,j=3
i=7,j=0
i=7,j=-1
i=8,j=0
i=9,j=1
i=10,j=2
i=11,j=3
i=12,j=4
i=13,j=5
i=14,j=6
i=15,j=7
8
```
可以看出，`KMP`算法其实是减少了比对次数，但增加了一个求解`PMT`数组的过程，所以在长字符串中效果比较明显。很多算法都是在暴力解的基础上做优化的，如上提供的`暴力解`也是处理了一些特殊情况的。

## 延申

[实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/solution/shi-xian-strstr-by-leetcode-solution-ds6y/)