
// Example :- 1

let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
  ];

  for(let student of students){
    if( student.marks >= 50 ) {
        console.log(`${student.name} - ${student.marks}`)
    }
  }
  

// Example :- 2

let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];

let longestWord = "";
for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);