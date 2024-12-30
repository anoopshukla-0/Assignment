function getUserDetails({ name, age, address }) {
    return `${name} is ${age} years old and lives at ${address}`;
}

const user = { name: "Alice", age: 25, address: "123 Street" };
console.log(getUserDetails(user)); 
// Output: "Alice is 25 years old and lives at 123 Street"
