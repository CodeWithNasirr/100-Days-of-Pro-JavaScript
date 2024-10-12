
// How do you check if an object has a property?
// you can use the in operator or hasOwnProperty().
let arr1 = { name: 'Nasir', age: 25 };
console.log('name' in arr1);
console.log(arr1.hasOwnProperty('name'));
console.log(arr1.hasOwnProperty('age'));
