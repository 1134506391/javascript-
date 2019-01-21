var Tree = function() {
    var Node = function(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
        //根节点
    var root = null;
    var insertNode = function(node, newNode) {
            if (newNode.value > node.value) {
                //往右走
                if (node.right == null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            } else if (newNode.value < node.value) {
                //往左走
                if (node.left == null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            }
        }
        // 插入节点
    this.insert = function(value) {
            var newNode = new Node(value)
            if (root == null) {
                //空树
                root = newNode
            } else {
                //不是空树
                insertNode(root, newNode)
            }
        }
        // 搜索节点
    this.search = function(value) {

    }
    var traverse = function(node, callback) {
        // node => null 
        if (node == null) return
        callback(node.value) //8 2 3 9 前序遍历
        traverse(node.left, callback)
            // callback(node.value) //2 3 8 9 中序遍历 
        traverse(node.right, callback)
            // callback(node.value) //3 2 9 8 后续遍历
    }
    this.traverse = function(callback) {
            traverse(root, callback)
        }
        // 查看根节点
    this.getRoot = function() {
            return root
        }
        //最小值
    var min = function(node) {
        if (!node) return null;
        while (node && node.left) {
            node = node.left
        }
        return node.value
    }
    this.min = function() {
            return min(root)
        }
        //最大值
    var max = function(node) {
        if (!node) return null;
        while (node && node.right) {
            node = node.right
        }
        return node.value
    }
    this.max = function() {
            return max(root)
        }
        // 删除节点
    var findMinNode = function(node) {
        if (node == null) return null
        while (node && node.left) {
            node = node.left
        }
        return node
    }
    var removeNode = function(node, value) {
        if (node == null) return null
        if (value > node.value) {
            // 继续向右查找
            node.right = removeNode(node.right, value)
            return node
        } else if (value < node.value) {
            // 向左查找
            node.left = removeNode(node.left, value)
            return node
        } else {
            // value == node.value
            // 执行删除过程 
            if (node.left == null && node.right == null) {
                //叶节点条件
                node = null
                return node
            }

            // 只有一个子节点条件
            console.log(node)
            if (node.left == null && node.right) {
                return node.right
            } else if (node.right == null && node.left) {
                return node.left
            }

            // 有两个子节点的条件
            var aux = findMinNode(node.right) //aux 查找到的最小的子节点
            node.value = aux.value
            node.right = removeNode(node.right, aux.value)
            return node
        }
    }
    this.remove = function(value) {
        root = removeNode(root, value)
    }

}

var t = new Tree()
t.insert(11)
t.insert(8)
t.insert(4)
t.insert(9)
t.insert(3)
t.insert(5)
t.insert(10)
t.remove(3)

var print = function(value) {
        console.log('value - ', value)
    }
    // t.traverse(print)