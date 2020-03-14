function transform(arg){
    const obj = {}
    arg.split('.').reduce((obj, i)=>{
           return (obj[i] = {});
    }, obj);
  return obj  
}

/* Test */
console.log(transform('a.b.c.d')) 

// {a: {b: {c: {d: {}}}}}

