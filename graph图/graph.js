var Stack = function() {
    var items = [];
    // this.items = [];
    this.push = function(val) {
        items.push(val)
    }
    this.pop = function() {
        return items.pop()
    }
    this.peek = function() {
        return items[items.length - 1]
    }
    this.isEmpty = function() {
        return items.length === 0
    }
    this.size = function() {
        return items.length
    }
    this.clear = function() {
        items = []
    }
}

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

var Graph = function() {
    //存储顶点
    var vertices = []
        //边
    var adjList = {}
        //添加顶点
    this.addVertices = function(v) {
            vertices.push(v)
            adjList[v] = []
        }
        // 添加边
    this.addEdge = function(a, b) {
        adjList[a].push(b)
        adjList[b].push(a)
    }
    this.print = function() {
        var s = '\n';
        for (var i = 0; i < vertices.length; i++) {
            var dingdian = vertices[i]
            s += dingdian + '=>'
            var bian = adjList[dingdian]
            for (var j = 0; j < bian.length; j++) {
                s += bian[j]
            }
            s += '\n'
        }
        console.log(s)
    }

    //white  未发现
    //gray   已发现未探索
    //black  已探索
    var initColor = function() {
            var color = {}
            for (var i = 0; i < vertices.length; i++) {
                color[vertices[i]] = 'white'
            }
            return color
        }
        //广度优先
    this.bfs = function(v, callback) {
        var color = initColor()

        var queue = new Queue()
        queue.enqueue(v)


        var d = {}
        var pred = {}
        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0
            pred[vertices[i]] = null
        }

        while (!queue.isEmpty()) {
            var now = queue.dequeue()
            var bian = adjList[now]
            for (var i = 0; i < bian.length; i++) {
                var w = bian[i]
                if (color[w] === 'white') {
                    color[w] = 'gray'

                    //设置回点
                    pred[w] = now
                    d[w] = d[now] + 1
                    queue.enqueue(w)
                }
            }
            color[now] = 'black'
            if (callback) {
                callback(now)
            }
        }

        return {
            pred: pred,
            d: d
        }
    }

    //深度优先
    var dfsVisite = function(u, color, callback) {
        color[u] = 'gray'
        var n = adjList[u]
        for (var i = 0; i < n.length; i++) {
            var w = n[i]
            if (color[w] === 'white') {
                dfsVisite(w, color, callback)
            }
        }
        color[u] = 'black'
        if (callback) {
            callback(u)
        }
    }
    this.dfs = function(v, callback) {
        var color = initColor()
        dfsVisite(v, color, callback)
    }
}

var g = new Graph()
g.addVertices('A')
g.addVertices('B')
g.addVertices('C')
g.addVertices('D')
g.addVertices('E')
g.addVertices('F')


g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('C', 'D')
    // g.print()

// g.addEdge('D', 'F')

var s = g.bfs("A")
var zuiduan = function(from, to) {
    var v = to; //设置当前点
    var path = new Stack()
    while (v != from) {
        path.push(v)
        v = s.pred[v]
    }
    path.push(v)
    var str = ''
    while (!path.isEmpty()) {
        str += path.pop() + 　'-'
    }
    str = str.slice(0, str.length - 1)
    console.log(str)
}

zuiduan("A", "F")