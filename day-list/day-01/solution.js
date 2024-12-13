const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

// Helper function to parse input and extract columns
function extractColumn(input, columnIndex) {
  return input
    .trim() // Remove whitespace
    .split("\n") // Split by lines
    .map((line) => line.split(/\s+/).map(Number)[columnIndex]) // Split by whitespace and get the specific column
    .sort((a, b) => a - b); // Sort in ascending order
}

// Helper function to calculate absolute differences between two arrays
function calculateDifferences(arrayA, arrayB) {
  return arrayA.map((value, index) => Math.abs(value - arrayB[index]));
}

// Extract and sort columns
const arrayA = extractColumn(input, 0); // First column
const arrayB = extractColumn(input, 1); // Second column

// Calculate differences
const differences = calculateDifferences(arrayA, arrayB);

// Calculate the total sum of differences
const totalSum = differences.reduce((sum, num) => sum + num, 0); // Sum all numbers

// Push the final result to solution.md under ## Conclusion
updateSolution(`Total Sum: ${totalSum}`);
