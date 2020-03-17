const union = (a, b) => [...new Set([...a, ...b])]
const intersection = (a, b) => [...new Set(a)].filter(item => new Set(b).has(item))
const difference = (a, b) => [...new Set(a)].filter(item => !(new Set(b).has(item)))

/* Tests */
console.log(union([4,5,7,2,1,5],[1,2,3,7,9])); // [4, 5, 7, 2, 1, 3, 9]
console.log(intersection([1,2,3], [4,3,2])); // [2, 3]
console.log(difference([1,2,3,7,9],[4,5,7,2,1,5])); // [3, 9]
console.log(difference([4,5,7,2,1,5], [1,2,3,7,9])); // [4, 5]
