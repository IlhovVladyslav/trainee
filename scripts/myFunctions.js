/*My functions*/
Array.prototype.duplicate = function(){ return [...this, ...this] }
Function.prototype.myCall = function(context, ...arg){return this.apply(context, [...arg])}
Function.prototype.myApply = function(context, [...arg]){return this.call(context, ...arg)}
Function.prototype.myBind = function(context, ...arg){return () => {this.call(context, ...arg)}}


/*Tests*/
//duplicate
const DuplicateArray = [1, 2, 3].duplicate()
console.log(DuplicateArray) // => [1, 2, 3, 1, 2, 3]

//myCall
const Person = {name: 'Ivan'}
function PersonInfo(phone, city) {console.log('Name :', this.name, 'Phone :', phone, 'City :', city)}
PersonInfo.myCall(Person, 1234, 'Kiev') // => Name : Ivan Phone : 1234 City : Kiev

//myApply
PersonInfo.myApply(Person, [3454, 'Kharkiv']) // => Name : Ivan Phone : 3454 City : Kharkiv

//myBind
PersonInfo.myBind(Person, 7897, 'Sumy')() // => Name : Ivan Phone : 7897 City : Sumy
