// 当要查到books中name=dd的书时，就要遍历全问题的item才能找到，非常消耗性能

// var books = [{
//         name: 'aa',
//         price: 100
//     },
//     {
//         name: 'bb',
//         price: 100
//     },
//     {
//         name: 'cc',
//         price: 100
//     },
//     {
//         name: 'dd',
//         price: 100
//     }
// ]

// 哈希表
var HashTable = function() {
    var items = [];
    //散列函数
    var loseloseHashCode = function(key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt();
        }
        return hash % 37
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        console.log(position + '-' + value);
        items[position] = value;
    }

    this.remove = function(key) {
        items[loseloseHashCode(key)] = undefined
    }

    this.get = function(key) {
        return items[loseloseHashCode(key)]
    }
    this.getItems = function() {
        return items;
    }
}