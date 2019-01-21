var a = new Set([1, 2, 3]);
var b = new Set([2, 3, 4]);
var union = new Set([...a, ...b]);
// console.log(union)

var intersect = new Set([...a].filter(x => b.has(x)));
// console.log(intersect)

var different = new Set([...a].filter(x => !b.has(x)))
console.log(different)