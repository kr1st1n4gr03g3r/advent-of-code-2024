const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

// Function to clean, validate, calculate products, and sum them up
const darthMul = (input) => {
  // Regex to match valid `mul(X,Y)` instructions
  const validMulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

  // Extract all valid matches and calculate products ***
  const results = [];
  let match;
  while ((match = validMulRegex.exec(input)) !== null) {
    const x = parseInt(match[1], 10); // Extract and parse X ***
    const y = parseInt(match[2], 10); // Extract and parse Y ***
    results.push(x * y); // Multiply and store the result ***
  }

  // Calculate the total sum of all products ***
  const totalSum = results.reduce((sum, num) => sum + num, 0); // ***

  return totalSum;
};

// Process input
const result = darthMul(input);

// Log for verification ***
console.log(result); // Output the total sum ***

// Update the solution
updateSolution(result);
