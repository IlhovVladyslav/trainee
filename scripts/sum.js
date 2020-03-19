const sum = x => {
    let currentSum = x;
    const func = (y = 0) => { 
      currentSum += y;
      return func;
    }
    func.toString = function() {
        return currentSum;
    };
    return func;
  }

/* Tests */
console.log(sum(1)()(2)(3)()); //6
console.log(sum(1)(2)(3)()(4)() + 1); //11
console.log(sum(1)(2)()(3)(4)()(5)()() + 1); //16
