const transform = arg => arg.split('.').reverse().reduce((result, next) => ({[next]: result}), null)

/* Test */
console.log(transform('a.b.c.d')) 

// {a: {b: {c: {d: null}}}

