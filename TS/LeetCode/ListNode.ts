/*
 * @Author: tangdaoyong
 * @Date: 2021-05-07 09:43:24
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-05-07 09:45:12
 * @Description: file content
 */
export default class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}