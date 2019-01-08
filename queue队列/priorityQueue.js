var PriorityQueue = function() {
    var items = [];

    //辅助类
    var QueueItem = function(el, priority) {
        this.el = el;
        this.priority = priority
    }

    this.enqueue = function(el, priority) {
        var queueItem = new QueueItem(el, priority);

        var added = false;
        for (var i = 0; i < items.length; i++) {
            if (queueItem.priority > items[i].priority) {
                items.splice(i, 0, queueItem);
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueItem);
        }
    }
    this.getItems = function() {
        return items;
    }
}


// var pq = new PriorityQueue();
// pq.enqueue('aa', 10);
// pq.enqueue('aa', 14);
// pq.enqueue('bb', 12);
// console.log(pq.getItems())