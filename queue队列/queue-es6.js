class Queue {
    constructor() {
        this.items = [];
    }

    enqueue = function(el) {
            this.items.push(el)
        }
        //出队
    dequeue = function() {
            return this.items.shift();
        }
        // 队头
    front = function() {
            return this.items[0]
        }
        //队是否为空
    isEmpty = function() {
            return this.items.length === 0;
        }
        //队的长度
    size = function() {
        return this.items.length;
    }
}