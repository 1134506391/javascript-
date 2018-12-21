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

// var s1 = new Stack()
// 10=>1010
function num10to2(number){
    var s1 = new Stack()
    var res
    var str =''
    while(number>0){
        res = Math.floor(number%2)
        str+= res
    }
    // str = s1.pop()
    return str;
}

var divBy2 = function(number){
    var s1 = new Stack();
    var ysshu
    var string2 = '';
    while(number >0){
        ysshu = number %2;
        s1.push(ysshu)
        number = Math.floor(number/2)
    }
    while(!s1.isEmpty()){
        string2+= s1.pop()
    }
    return string2

}