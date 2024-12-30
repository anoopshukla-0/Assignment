function removeDuplicates(arr) {
    // Use a Set to remove duplicates and spread it back to an array
    return [...new Set(arr)];
}

// Example usage
const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result); // Output: [1, 2, 3, 4, 5]
