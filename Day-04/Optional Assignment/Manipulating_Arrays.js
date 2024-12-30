function filterAndDouble (arr) {
    let greater = arr.filter(num => num >= 5)
    let mul = greater.map(nums => nums*2)
    return mul;
 }
 
 
 
 const result = filterAndDouble([1, 3, 5, 7, 9]);
 console.log(result); // Output: [10, 14, 18]