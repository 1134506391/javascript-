var Set2 = function() {
    var items = {};
    // has检查元素是否存在 
    this.has = function(value) {
            return items.hasOwnProperty(value);
        }
        //添加元素,集合是不重复的
    this.add = function(value) {
            if (this.has(value)) {
                return false;
            } else {
                items[value] = value;
                return value;
            }
        }
        //移除元素
    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value]
            return true;
        } else {
            return false;
        }
    }

    //查看集合
    this.getItems = function() {
            return items;
        }
        //清除所有
    this.clear = function() {
        items = {};
    }

    this.size = function() {
        // var count = 0;
        // for(var i in items){
        //     if(items.hasOwnProperty(i)){
        //         count++
        //     }
        // }
        // return count;
        return Object.keys(items).length;
    }
    // 查看所有的value
    this.value = function() {
        var values = [];
        for (var i in items) {
            if (items.hasOwnProperty(i)) {
                values.push(items[i]);
            }
        }
        return values;
    }


    //并集
    this.union = function(otherSet) {
        var resultSet = new Set2();
        // 1.把自己的值提取出来 
        var arr = this.value();
        for (var i = 0; i < arr.length; i++) {
            resultSet.add(arr[i]);
        }
        // 2.把另一个集合的值提取出来 
        arr = otherSet.value();
        for (var i = 0; i < arr.length; i++) {
            resultSet.add(arr[i])
        }
        return resultSet;
    }

    //交集
    this.intersection = function(otherSet) {
        var resultSet = new Set2();
        var arr = this.value();

        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i])
            if (otherSet.has(arr[i])) {
                resultSet.add(arr[i])
            }
        }
        return resultSet;
    }

    //差集
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var value = this.value();
        for (let i = 0; i < value.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet;
    }

}


var A = new Set2();
A.add(1)
A.add(2)
A.add(3)


var B = new Set2()
A.add(2)
A.add(3)
A.add(4)