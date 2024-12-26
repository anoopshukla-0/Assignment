// function numberPyramid(num) {
//     for ( let i = 1; i <= num; i++ ) {
//         let nums = "";
//         for ( let j = 0; j <= i; j++ ) {
//             if (num % 3 == 0) {
//                 continue;
//             }
//             else if (num % 7 == 0) {
//                 break;
//             }
//             nums += num;
//         }
//         console.log(nums);
//     }
// }

// numberPyramid(10)




// Prompt user for the number of rows
let rows = parseInt(prompt("Enter number of rows (1-10):"));

if (rows < 1 || rows > 10) {
  console.log("Please enter a number between 1 and 10.");
} else {
  // Outer loop to control the number of rows
  for (let i = 1; i <= rows; i++) {
    let row = ""; // Variable to build the current row
    let stop = false; // Flag to determine if we need to stop

    // Inner loop to generate numbers for each row
    for (let j = 1; j <= i; j++) {
      if (j % 3 === 0) {
        continue; // Skip numbers divisible by 3
      }
      if (j % 7 === 0) {
        stop = true; // Mark flag to stop the pyramid
        break;
      }
      row += j + " "; // Add the number to the row
    }

    console.log(row.trim()); // Print the row without trailing spaces

    if (stop) {
      break; // Stop the outer loop if the condition is met
    }
  }
}
