const fs = require("fs");
const { updateSolution } = require("../utils/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

// Function to add all numbers on the first line of the text file
function addNumbersFromFirstLine(data) {
  const firstLine = data.split("\n")[0]; // Extract the first line
  const numbers = firstLine.split(" ").map(Number); // Split by space and convert to numbers
  return numbers.reduce((sum, num) => sum + num, 0); // Add all numbers together
}

// Example usage of addNumbers
const result = addNumbersFromFirstLine(input); // Pass the input data to the function

// Push the final result to solution.md under ## Conclusion
updateSolution(`Final result: ${result}`);
