function getResolvedPromise(value) {
    return Promise.resolve(value)
  }

getResolvedPromise(500)
    .then(res => (res > 300) ? new Error('Oops! ' + res) : res)
    .then(res => console.log(res)) 
    .catch(error => console.log(error))
    .finally(console.log("Promise end"))