/*
 * @Author: tangdaoyong
 * @Date: 2021-03-02 11:55:17
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-03-02 12:02:10
 * @Description: 栈
 */
/**
* 使用Array模拟栈
* shift()方法：移除数组中的第一项并返回该项
* push()方法：从数组末端添加项
* unshift()方法：在数组的前端添加项
* pop()方法：从数组末端移除项
*/
/**
 * 泛型栈
 */
export default class StackT<T> {
    /**
     * 栈数据
     */
    private data = Array<T>();
    /**
     * 栈大小
     */
    size = (): number => this.data.length;
    /**
     * 入栈
     * @param item 
     */
    push = (item: T) => this.data.push(item);
    /**
     * 出栈
     * 当data为空时返回undefined
     */
	pop = (): T => this.data.pop();
}