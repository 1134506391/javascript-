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

var s2 = new StackEs6()