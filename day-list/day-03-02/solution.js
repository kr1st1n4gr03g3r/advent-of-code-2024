const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

// Function to process input
const darthMul = (input) => {
  // Regex to match valid `do()`, `don't()`, and `mul(X,Y)` instructions
  const validInstructionRegex = /(do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\))/g;

  // Extract matches
  const matches = input.match(validInstructionRegex) || [];

  let isEnabled = true; // Start in the enabled state
  let totalSum = 0; // Initialize sum of enabled `mul()` products

  matches.forEach((instruction) => {
    if (instruction === "do()") {
      isEnabled = true; // Enable subsequent mul()
    } else if (instruction === "don't()") {
      isEnabled = false; // Disable subsequent mul()
    } else if (instruction.startsWith("mul(") && isEnabled) {
      // Process enabled `mul(X,Y)` instructions
      const [x, y] = instruction
        .match(/\d+/g) // Extract the numbers
        .map(Number); // Convert to integers
      totalSum += x * y; // Add the product to the total sum
    }
  });

  return totalSum;
};

// Process input
const result = darthMul(input);

// Log the result
console.log("Total Sum of Enabled mul() Instructions:", result);

// Update the solution
updateSolution(result);
