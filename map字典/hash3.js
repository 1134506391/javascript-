var HashTable_X = function() {
    var table = []
    var loseloseHashCode = function(key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt()
        }
        return hash % 37
    }
    var djb2HashCode = function(key) {
        var hash = 5381
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key[i].charCodeAt()
        }
        return hash % 1013
    }
    var Node = function(key, value) {
        this.key = key
        this.value = value
    }
    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        if (table[position] == undefined) {
            table[position] = new Node(key, value)
        } else {
            var index = position + 1;
            while (table[index] !== undefined) {
                index++
            }
            table[index] = new Node(key, value)
        }
    }
    this.remove = function(key) {
        table[djb2HashCode(key)] = undefined
    }
    this.get = function(key) {
        return table[djb2HashCode(key)]
    }
    this.getItems = function() {
        return table
    }

}