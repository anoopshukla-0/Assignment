function transformArrayToObject(arr) {
    // Use reduce to transform the array into an object
    return arr.reduce((acc, str) => {
        acc[str] = str.length; // Map string as key and its length as value
        return acc;
    }, {});
}

// Example usage
const result = transformArrayToObject(["apple", "banana", "cherry"]);
console.log(result); // Output: { apple: 5, banana: 6, cherry: 6 }