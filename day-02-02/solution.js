const fs = require("fs");
const { updateSolution } = require("../utils/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

const nestedArray = input
  .trim() // Remove whitespace
  .split("\n") // Split by lines
  .map((line) => line.split(/\s+/).map(Number)); // Split numbers on each line into a nested array

function checkArraySafety(arrays) {
  return arrays.map((array) => {
    const isIncreasing = array.every((num, i) => i === 0 || num > array[i - 1]); // Check if number is strictly increasing
    const isDecreasing = array.every((num, i) => i === 0 || num < array[i - 1]); // Check if number is strictly decreasing
    const isTheSame = array.every((num, i) => i === 0 || num === array[i - 1]); // Check if all numbers in the array are the same

    const isClose = array.every((num, i) => {
      if (i === 0) return true; // Skip the first number
      const diff = Math.abs(num - array[i - 1]); // For each pair of consecutive numbers, calculate their difference
      return diff >= 1 && diff <= 3; // Ensure the difference is between 1 and 3
    });

    const safe = (isIncreasing || isDecreasing) && isClose && !isTheSame; // Combine conditions

    // *** New logic to handle unsafe arrays
    if (!safe) {
      // Try removing each level (number) to see if the array becomes safe
      for (let i = 0; i < array.length; i++) {
        const modifiedArray = array.filter((_, index) => index !== i); // Remove one level
        const isModifiedIncreasing = modifiedArray.every(
          (num, j) => j === 0 || num > modifiedArray[j - 1]
        );
        const isModifiedDecreasing = modifiedArray.every(
          (num, j) => j === 0 || num < modifiedArray[j - 1]
        );
        const isModifiedClose = modifiedArray.every((num, j) => {
          if (j === 0) return true;
          const diff = Math.abs(num - modifiedArray[j - 1]);
          return diff >= 1 && diff <= 3;
        });

        // If the modified array is safe, mark the original array as safe
        if ((isModifiedIncreasing || isModifiedDecreasing) && isModifiedClose) {
          return {
            array,
            safe: true, // *** Mark array as safe due to modification
            modified: true, // *** Indicate that it was modified to become safe
          };
        }
      }
    }

    // Return original safety status
    return {
      array,
      safe,
      modified: false, // *** Indicate that no modification was needed
    };
  });
}

const results = checkArraySafety(nestedArray);
const totalSafe = results.filter(({ safe }) => safe).length;

console.log(results);
console.log(totalSafe);

updateSolution(totalSafe);
