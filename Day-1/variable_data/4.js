// How do you reverse an array without using the built-in reverse() method?

// Methode 1
let arr = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log(reversed);



// Methode 2
// let arr = [1, 2, 3, 4, 5];
// for(let i=0;Math.floor(arr.length/2);i++){
//     let temp=arr[i];
//     arr[i]=arr[arr.length-1-i];
//     arr[arr.length-1-i]=temp;
// }
// console.log(arr); // [5, 4, 3, 2, 1]
