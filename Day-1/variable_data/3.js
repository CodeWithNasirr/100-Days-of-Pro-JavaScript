// How can you copy an object in JavaScript?

let original = { a: 1, b: 2 };
let copy1 = { ...original }; // Using spread operator
let copy2 = Object.assign({}, original); // Using Object.assign()

console.log(copy1); // { a: 1, b: 2 }
console.log(copy2); // { a: 1, b: 2 }
