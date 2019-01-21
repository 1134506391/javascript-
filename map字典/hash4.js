var HashTable = function() {
    var items = [];
    //散列函数
    var djb2HashCode = function(key) {
        var hash = 5381
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key[i].charCodeAt()
        }
        return hash % 1013
    }

    this.put = function(key, value) {
        var position = djb2HashCode(key)
        console.log(position + '-' + value);
        items[position] = value;
    }

    this.remove = function(key) {
        items[djb2HashCode(key)] = undefined
    }

    this.get = function(key) {
        return items[djb2HashCode(key)]
    }
    this.getItems = function() {
        return items;
    }
}