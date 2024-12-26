let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  };
  
for(let books in book){
    console.log(`${books}: ${book[books]}`);
}  