function greet(name, greeting = "Hello") {
    // Concatenate and return the greeting message
    return `${greeting} ${name}`;
}

// Example usage
console.log(greet("Alice"));          // Output: "Hello Alice"
console.log(greet("Alice", "Hi"));    // Output: "Hi Alice"
