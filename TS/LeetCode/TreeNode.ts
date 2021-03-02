/*
 * @Author: tangdaoyong
 * @Date: 2021-03-02 12:04:42
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-02 12:05:14
 * @Description: file content
 */
export default class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}