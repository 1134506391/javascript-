var Queue = function() {
    var items = [];
    //入队
    this.enqueue = function(el) {
            items.push(el)
        }
        //出队
    this.dequeue = function() {
            return items.shift();
        }
        // 队头
    this.front = function() {
            return items[0]
        }
        //队是否为空
    this.isEmpty = function() {
            return items.length === 0;
        }
        //队的长度
    this.size = function() {
        return items.length;
    }
}

var chuanhua = function(names, number) {
        var q = new Queue();
        for (var i = 0; i < names.length; i++) {
            q.enqueue(names[i])
        }

        var taotal;
        while (q.size() > 1) { //q.size() == 1 时，停止
            for (var i = 0; i < number - 1; i++) { //number=3,只循环2次
                q.enqueue(q.dequeue())  //1.先把a出队，然后入队, 2.把b出队，然后入队
            }
            taotal = q.dequeue(); //c
            console.log('淘汰玩家是:' + taotal)
        }
    }
//玩家列表
var names = ['a', 'b', 'c', 'd', 'e', 'f'];
//游戏规则
var number = 3;

chuanhua(names, number)

