var LikedList = function() {
    //链表头
    var head = null;
    // 链表长度
    var length = 0;
    // 节点
    var Node = function(el) {
            this.el = el;
            this.next = null;
        }
        //链表尾添加元素
    this.append = function(el) {
            var node = new Node(el) // 1     2
            if (head == null) {
                head = node; //head =1
            } else {
                var current = head; //current=1
                while (current.next) { //null
                    current = current.next;
                }
                //while循环执行完之后，current已经是链表的最后一项了
                current.next = node //current.next = node = 2
            }
            length++
        }
        //链表某一个位置添加元素
    this.insert = function(position, el) {
            //越界
            if (position > -1 && position < length) {
                var node = new Node(el);
                if (position == 0) {
                    var current = head;
                    head = node;
                    head.next = current;
                } else {
                    var index = 0;
                    var current = head;
                    var previous = null;
                    while (index < position) {
                        previous = current;
                        current = current.next;
                        index++
                    }
                    previous.next = node;
                    node.next = current;
                }
                length++
            }

        }
        //删除指定位置的元素
    this.removeAt = function(position) {
            if (position > -1 && position < length) {
                if (position == 0) {
                    var current = head;
                    head = current.next;
                } else {
                    var current = head;
                    var previous = null;
                    var index = 0;
                    while (index < position) {
                        previous = current
                        current = current.next;
                        index++
                    }
                    previous.next = current.next;

                }
                length--
                return current
            }
            return null
        }
        //查找链表元素下标
    this.indexOf = function(el) {
            var current = head;
            var index = 0;
            while (current) {
                if (current.el == el) {
                    return index
                }
                current = current.next
                index++
            }
            return -1
        }
        //删除指定元素
    this.remove = function(el) {
            return this.removeAt(this.indexOf(el))
        }
        // 是否为空
    this.isEmpty = function() {
            return length == 0;
        }
        //链表长度
    this.size = function() {
            return length
        }
        //链表头
    this.getHead = function() {
        return head;
    }
}

// var l = new LikedList();
// l.append(1)
// l.append(2)
// l.append(3);
// l.getHead()