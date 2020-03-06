const url = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

const resultArray = url.reduce((prevPr, сurrItem) => prevPr.then((acc) => fetch(сurrItem).then(resp => resp.json()).then(resp => [...acc, resp])), 
    Promise.resolve([]))

resultArray.then(console.log)

