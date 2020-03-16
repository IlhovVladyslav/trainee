function transform(arg){
    return arg.split('.').reverse().reduce((obj, i) => ({[i]: obj}), null);
}

/* Test */
console.log(transform('a.b.c.d')) 

// {a: {b: {c: {d: {}}}}}

