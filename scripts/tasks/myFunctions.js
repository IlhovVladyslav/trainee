/*My functions*/
Array.prototype.duplicate = function () {
    return [...this, ...this]
};
Function.prototype.myCall = function (context, ...args) {
    return this.apply(context, args)
};
Function.prototype.myApply = function (context, [...args]) {
    return this.call(context, ...args)
};
Function.prototype.myBind = function (context, ...args) {
    return () => {this.call(context, ...args)}
};


/*Tests*/
//duplicate
console.log([1, 2, 3].duplicate()) // => [1, 2, 3, 1, 2, 3]

//myCall
const person = {name: 'Ivan'}
function personInfo (phone, city) {
    console.log('Name :', this.name, 'Phone :', phone, 'City :', city)
};
personInfo.myCall(person, 1234, 'Kiev') // => Name : Ivan Phone : 1234 City : Kiev

//myApply
personInfo.myApply(person, [3454, 'Kharkiv']) // => Name : Ivan Phone : 3454 City : Kharkiv

//myBind
personInfo.myBind(person, 7897, 'Sumy')() // => Name : Ivan Phone : 7897 City : Sumy
