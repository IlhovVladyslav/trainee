function transform(arg){
    const obj = {}
    const arrayPropNames = arg.split('.')
    arrayPropNames.reduce((obj, i, index)=>{
       if(index === arrayPropNames.length-1){ 
           return (obj[i] = null);
         } else {
           return (obj[i] = {});
       } 
    }, obj);
  return obj  
}

/* Test */
console.log(transform('a.b.c.d')) // {a: {b: {c: {d: null}}}}