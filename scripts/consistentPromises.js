const url = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

const consistentPromises = (promisesArray) => {
    let count = 0
    const resultArray = []
    const promiseСhain = (promisesArray) => {
        fetch(promisesArray[count])
        .then(res => res.json())
        .then(data => {
            count++
            resultArray.push(data)
            console.log(resultArray)      
        })
        .then(() => (count === promisesArray.length) ? resultArray : promiseСhain(promisesArray))
        .catch(error => console.log(error))
    }
    promiseСhain(promisesArray)
}

consistentPromises(url)
