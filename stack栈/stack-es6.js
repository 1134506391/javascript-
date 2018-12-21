class StackEs6{
    constructor(){
        this.items = []
    }
    push(val){
        this.items.push(val)
    }
    pop(){
        return this.items.pop()
    }
    size(){
        return this.items.length
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0 
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = []
    }
}

// var s2 = new StackEs6()

var tenToTwo = function(number){
    var s2 = new StackEs6()
    var remainder  //余数
    var str = '';
    while(number >0){
        remainder = number%2
        number =Math.floor(number/2)
        s2.push(remainder)
    }
    while(s2.isEmpty() === false){
        str+= s2.pop()
    }
    return str
}

function f1(){
    return console.log('f1 finish')
}

function f2(){
    f1()
    return console.log('f2 finish')
}