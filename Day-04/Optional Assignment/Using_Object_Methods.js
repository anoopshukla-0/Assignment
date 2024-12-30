const mathOperations = {
    // Method for addition
    add: (a, b) => a + b,

    // Method for subtraction
    subtract: (a, b) => a - b,

    // Method for multiplication
    multiply: (a, b) => a * b,

    // Method for division with edge case handling
    divide: (a, b) => {
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    }
};

// Example usage
console.log(mathOperations.add(10, 5));      // Output: 15
console.log(mathOperations.subtract(10, 5)); // Output: 5
console.log(mathOperations.multiply(10, 5)); // Output: 50
console.log(mathOperations.divide(10, 5));   // Output: 2
console.log(mathOperations.divide(10, 0));   // Output: "Error: Division by zero is not allowed."
