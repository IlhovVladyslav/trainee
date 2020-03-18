const inputs = [
    'вертикаль',
    'кильватер',
    'апельсин',
    'спаниель',
    'австралопитек',
    'ватерполистка',
    'кластер',
    'сталкер',
    'стрелка'
  ];

const anagrams = arrayWords => {
    const obj = {};
    arrayWords.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        (obj[sortedWord]) ? obj[sortedWord].push(word) : obj[sortedWord] = [word]
    });
    return Object.values(obj);
  }
/* Test */ 
console.log(anagrams(inputs)) 
/* [
    ["вертикаль", "кильватер"],
    ["апельсин", "спаниель"],
    ["австралопитек", "ватерполистка"],
    ["кластер", "сталкер", "стрелка"]
  ]
*/
