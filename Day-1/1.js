//#8 used to join to the given arrays

let compare=(a,b)=>{
    if (a.title<b.title){
        return -1
    }
    else if(a.title>b.title){
        return 1
    }
    else{
        return 0
    }
}
  const books = [
    { title: 'Harry Potter', author: 'J.K. Rowling' },
    { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: 'Game of Thrones', author: 'George R.R. Martin' }
  ];

console.log(books.sort(compare))