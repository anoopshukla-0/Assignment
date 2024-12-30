function reverseWords(words) {
  return words
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

const result = reverseWords("hello world");
console.log(result); // Output: "olleh dlrow"