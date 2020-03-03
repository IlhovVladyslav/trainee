class Universe {
    constructor(){
        if(typeof Universe.instanse === 'object'){
            return Universe.instanse;
        }
    this.size = 300;
    Universe.instanse = this;
    }
    getSize(){
        return this.size
    }
    setSize( newValue ){
        return this.size = newValue
    }
}

/* Tests */

let a = new Universe();
let b = new Universe();

console.log(a === b); //true
console.log(a.getSize(), b.getSize()); //300, 300
a.setSize(200);
console.log(a.getSize(), b.getSize()); //200, 200