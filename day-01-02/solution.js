// Part Two

const fs = require("fs");
// const { updateSolution } = require("../utilities/update-solution");

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

// console.log(pairedArray);

const columnA = pairedArray.map((pair) => pair[0][0]); // leftmost numbers column A
const columnB = pairedArray.map((pair) => pair[1][0]); // rightmost numbers column B

// Find how many times a number in column A is found in column B
const matchCounts = columnA.map((num) => {
  const count = columnB.filter((value) => value === num).length; // count occurences in column B
  return { number: num, count };
});

// Filter out entries with a count of zero
const nonZeroMatches = matchCounts.filter(({ count }) => count > 0);

// Calculate the product for each match and store it in a new array
const productArray = nonZeroMatches.map(({ number, count }) => number * count);

// Calculate teh sum of the product array
const totalSum = productArray.reduce((sum, product) => sum + product, 0);

console.log("Product Array:", productArray);
console.log("Total Sum of Product Array:", totalSum);
