function sumNumbers() {
    let sign = prompt("Enter valid numbers separated by spaces:");
    totalSum(sign);
}

function totalSum(sign) {
    let totalSum = 0;
    // Split input and attempt to convert to numbers
    let numbers = sign.split(" ").map(Number);

    // Check if all values are valid numbers
    let isValid = numbers.every((num) => !isNaN(num));

    if (isValid) {
        for (let i = 0; i < numbers.length; i++) {
            totalSum += numbers[i];
        }
        console.log(`The total sum is: ${totalSum}`);
    } else {
        console.error("Invalid input. Please enter numbers only.");
    }
}

sumNumbers();