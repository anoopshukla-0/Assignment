function getTopTwo(num) {
    const sortNumbers = num.sort((a, b) => b - a );
    
    const [first, second] = sortNumbers;
    return [first, second];
}

const result = getTopTwo([10, 20, 30, 40]);
console.log(result); // Output: [40, 30]