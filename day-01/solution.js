const fs = require("fs");
// const { updateSolution } = require("../utils/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

// 3D array:
const pairedArray = input
  .trim() // remove whitespace
  .split("\n") // split by lines
  .map((line) => {
    const numbers = line.split(/\s+/).map(Number); // Split by whitespace and convert to Numbers
    return numbers.map((num) => [num]); // Nest each array into it's own array
  });

// Sort array from smallest to largest by column A and B:
const arrayA = pairedArray.map((pair) => pair[0][0]); // Extract first number in pair
arrayA.sort(); // sort
// console.log("Array A:", arrayA);

const arrayB = pairedArray.map((pair) => pair[1][0]); // Extract second number in pair
arrayB.sort(); // sort
// console.log("Array B:", arrayB);

// Recombine arrays making pairs with the lowest to highest numbers:
const recombineArray = arrayA.map((value, index) => [value, arrayB[index]]);
// console.log(recombineArray);

// Find the differences:
const differences = recombineArray.map(([a, b]) => [Math.abs(a - b)]);

// console.log("Differences (Positive):", differences);

const totalSum = differences
  .flat() // Flatten into single array
  .reduce((sum, num) => sum + num, 0); // sum of all numbers

console.log("Total Sum:", totalSum);
