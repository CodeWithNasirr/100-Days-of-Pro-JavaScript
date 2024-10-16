// How do you handle optional chaining and nullish coalescing in expressions?


let user = { profile: null };
console.log(user.profile?.name); // undefined (no error)

let username = user.name ?? 'Guest';
console.log(username); // "Guest"
