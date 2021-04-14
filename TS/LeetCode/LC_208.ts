/*
 * @Author: tangdaoyong
 * @Date: 2021-04-14 09:11:44
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-14 10:21:56
 * @Description: 实现 Trie (前缀树)
 */
/*
208. 实现 Trie (前缀树)
Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

Trie() 初始化前缀树对象。
void insert(String word) 向前缀树中插入字符串 word 。
boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。
 

示例：

输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
 

提示：

1 <= word.length, prefix.length <= 2000
word 和 prefix 仅由小写英文字母组成
insert、search 和 startsWith 调用次数 总计 不超过 3 * 104 次
*/
/**
 * 使用数组和集合分别存储单词和单词的前缀（前缀重复的可能比较大，所以使用Set排重）
 * 执行用时：
488 ms
, 在所有 TypeScript 提交中击败了
12.20%
的用户
内存消耗：
51.7 MB
, 在所有 TypeScript 提交中击败了
73.17%
的用户
 */
class Trie {

    words: Array<string>
    prefixs: Set<string>

    constructor() {
        this.words = Array<string>()
        this.prefixs = new Set<string>()
    }

    /**
     * 设置前缀
     * @param word 
     */
    private _wordPrefixs(word: string) {
        for (let i = 1; i <= word.length; i++) {
            this.prefixs.add(word.slice(0, i))
        }
    }

    insert(word: string): void {
        this.words.push(word)
        this._wordPrefixs(word)
    }

    search(word: string): boolean {
        let res = this.words.find((value) => value === word)
        return res !== undefined
    }

    startsWith(prefix: string): boolean {
        return this.prefixs.has(prefix)
    }
}

/**
 * 时间不理想，也使用Set存单词
 * 执行用时：
300 ms
, 在所有 TypeScript 提交中击败了
29.27%
的用户
内存消耗：
51.7 MB
, 在所有 TypeScript 提交中击败了
73.17%
的用户
 */
class TrieOne {

    words: Set<string>
    prefixs: Set<string>

    constructor() {
        this.words = new Set<string>()
        this.prefixs = new Set<string>()
    }

    insert(word: string): void {
        this.words.add(word)
        // for (let i = 1; i <= word.length; i++) {
        //     // 这个地方每次切片，影响性能
        //     this.prefixs.add(word.slice(0, i))
        // }
        /*
        执行用时：
        316 ms
        , 在所有 TypeScript 提交中击败了
        24.39%
        的用户
        内存消耗：
        54.4 MB
        , 在所有 TypeScript 提交中击败了
        65.85%
        的用户
        */
        let prefix: string | null = null
        for (let j = 0; j < word.length; j++) {
            if (prefix === null) {
                prefix = word[j]
            } else {
                prefix += word[j]
            }
            this.prefixs.add(prefix)
        }
    }

    search(word: string): boolean {
        return this.words.has(word)
    }

    startsWith(prefix: string): boolean {
        return this.prefixs.has(prefix)
    }
}

/**
 * 官方题解
 * 执行用时：
240 ms
, 在所有 TypeScript 提交中击败了
70.73%
的用户
内存消耗：
54 MB
, 在所有 TypeScript 提交中击败了
70.73%
的用户
 */
class TrieThree {

    node: Object

    constructor() {
        this.node = {}
    }

    /**
     * 搜索前缀
     * @param word 
     */
    private _searchPrefix(prefix: string): boolean {
        let node = this.node
        for (let i = 0; i < prefix.length; i++) {
            if (!node[prefix[i]]) {
                return false
            }
            node = node[prefix[i]]
        }
        return true
    }

    /**
     * 搜索单词
     * @param word 
     */
     private _searchWord(word: string): boolean {
        let node = this.node
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) {
                return false
            }
            node = node[word[i]]
        }
        if (!node['isWord']) {
            return false
        }
        return true
    }

    insert(word: string): void {
        let node = this.node
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) {
                node[word[i]] = {}
            }
            node = node[word[i]]
        }
        node['isWord'] = true
    }

    search(word: string): boolean {
        return this._searchWord(word)
    }

    startsWith(prefix: string): boolean {
        return this._searchPrefix(prefix)
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
