function stringifyAndConcat(input1, input2) {
    // Convert both inputs to strings using the toString() method
    const str1 = input1.toString();
    const str2 = input2.toString();

    // Concatenate the two strings
    return str1 + str2;
}

// Example usage
const result = stringifyAndConcat(123, true);
console.log(result); // Output: "123true"
