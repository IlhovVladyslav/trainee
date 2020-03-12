function myNew (Constr, ...args) {
    const obj = Object.create(Constr.prototype); 
    const res = Constr.apply(obj, args);
    if (typeof res === 'object' && res !== null) {
      return res; 
    }
    return obj;
  }

 /* Test */ 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = myNew(Person, 'Den', 20);
console.log(user) // Person {name: "Den", age: 20}