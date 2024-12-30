function generateEmail(name, domain) {
    // Ensure inputs are strings
    if (typeof name !== "string" || typeof domain !== "string") {
        return "Error: Both name and domain must be strings.";
    }

    // Generate email using template literals
    return `${name}@${domain}`;
}

// Example usage
console.log(generateEmail("john", "example.com"));
console.log(generateEmail(123, "example.com"));
