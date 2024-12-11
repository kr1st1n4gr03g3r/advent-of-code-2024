const fs = require("fs");
const { updateSolution } = require("../utilities/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

// 3D array:
const pairedArray = input
  .trim() // Remove whitespace
  .split("\n") // Split by lines
  .map((line) => {
    const numbers = line.split(/\s+/).map(Number); // Split by whitespace and convert to numbers
    return numbers.map((num) => [num]); // Nest each array into its own array
  });

// Sort array from smallest to largest by column A and B:
const arrayA = pairedArray.map((pair) => pair[0][0]); // Extract first number in pair
arrayA.sort(); // Sort

const arrayB = pairedArray.map((pair) => pair[1][0]); // Extract second number in pair
arrayB.sort(); // Sort

// Recombine arrays making pairs with the lowest to highest numbers:
const recombineArray = arrayA.map((value, index) => [value, arrayB[index]]);

// Find the differences:
const differences = recombineArray.map(([a, b]) => [Math.abs(a - b)]);

// Calculate the total sum:
const totalSum = differences
  .flat() // Flatten into a single array
  .reduce((sum, num) => sum + num, 0); // Sum all numbers

// Push the final result to solution.md under ## Conclusion
updateSolution(`Total Sum: ${totalSum}`);
