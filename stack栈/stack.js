var Stack = function(){
    var items = [];
    // this.items = [];
    this.push= function(val){
        items.push(val)
    }
    this.pop = function(){
        return items.pop()
    }
    this.peek = function(){
        return items[items.length-1]
    }
    this.isEmpty = function(){
        return items.length === 0
    }
    this.size= function(){
        return items.length
    }
    this.clear = function(){
        items = []
    }
}

var s1 = new Stack()