// How do you merge two arrays without duplicates?
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let merge = [...new Set([...arr1, ...arr2])];
console.log(merge);
