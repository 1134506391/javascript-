// 树
var Tree = function() {
    // 节点 
    var Node = function(value) {
            this.value = value;
            this.left = null;
            this.right = null
        }
        //根节点
    var root = null;
    var insertNode = function(node, newNode) {
            if (newNode.value > node.value) {
                //右
                if (node.right == null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            } else if (newNode.value < node.value) {
                // 左
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
            root = newNode;
        } else {
            insertNode(root, newNode)
        }
    }

    this.getRoot = function() {
        return root;
    }

}