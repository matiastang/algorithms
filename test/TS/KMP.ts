/*
 * @Author: tangdaoyong
 * @Date: 2021-02-20 09:35:23
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-02-20 11:28:44
 * @Description: KMP算法
 */
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
            console.log(`i=${index},j=${searchIndex}`)
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

let str = 'ABDCABDFABDCABDE'
let searchStr = 'ABDCABDE'
let index = searchSubString(str, searchStr)
console.log(index);

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
let pmtStr = 'ABABABCA';
let pmtArr = getPMTArray(pmtStr);
console.log(pmtArr);

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
        console.log(`i=${i},j=${j}`)
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
let kmpIndex = kmpSearchSubString(str, searchStr)
console.log(kmpIndex);