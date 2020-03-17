// Тут тоже нужно сделать через Set, чтобы были уникальные элементы, и привести b к Set тоже,
//  и использовать метод has вместо includes, так мы гарантируем уникальность в любом случае

// Тут тоже заюзай has и преобразуй b к Set, и избавься от вложенности большой,
//  зачем фильтр внутри аргумента new Set, когда можно сделать [...new Set(a)].filter(...

const union = (a, b) => [...new Set([...a, ...b])]
const intersection = (a, b) => [...new Set(a)].filter(item => new Set(b).has(item))
const difference = (a, b) => [...new Set(a)].filter(item => !(new Set(b).has(item)))

/* Test */
console.log(union([4,5,7,2,1,5],[1,2,3,7,9])); // [4, 5, 7, 2, 1, 3, 9]
console.log(intersection([1,2,3], [4,3,2])); // [2, 3]
console.log(difference([1,2,3,7,9],[4,5,7,2,1,5])); // [3, 9]
console.log(difference([4,5,7,2,1,5], [1,2,3,7,9])); // [4, 5]
