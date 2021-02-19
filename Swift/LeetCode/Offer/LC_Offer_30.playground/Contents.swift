class MinStack {
    
    private var min
    private var list = [Int]()

    /** initialize your data structure here. */
    init() {
        
    }
    
    func push(_ x: Int) {
        self.list.append(x)
    }
    
    func pop() {
        let index = self.list.count - 1
        self.list.remove(at: index)
    }
    
    func top() -> Int {
        return self.list.last
    }
    
    func min() -> Int {

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * let obj = MinStack()
 * obj.push(x)
 * obj.pop()
 * let ret_3: Int = obj.top()
 * let ret_4: Int = obj.min()
 */
