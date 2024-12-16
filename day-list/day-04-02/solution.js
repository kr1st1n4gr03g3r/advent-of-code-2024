const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read data from input.txt
const input = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(""));

// Function to count X-MAS patterns
const countXMASPatterns = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // Check if the X-MAS pattern exists at a given center (r, c)
  const isValidXMAS = (r, c) => {
    // Ensure grid boundaries are not exceeded
    if (r - 1 < 0 || r + 1 >= rows || c - 1 < 0 || c + 1 >= cols) {
      return false;
    }

    // Check for Pattern 1 (Forward X-MAS)
    const pattern1 =
      grid[r - 1][c - 1] === "M" && // Top-left
      grid[r - 1][c + 1] === "S" && // Top-right
      grid[r][c] === "A" && // Center
      grid[r + 1][c - 1] === "M" && // Bottom-left
      grid[r + 1][c + 1] === "S"; // Bottom-right

    // Check for Pattern 2 (Backward X-MAS)
    const pattern2 =
      grid[r - 1][c - 1] === "S" && // Top-left
      grid[r - 1][c + 1] === "M" && // Top-right
      grid[r][c] === "A" && // Center
      grid[r + 1][c - 1] === "S" && // Bottom-left
      grid[r + 1][c + 1] === "M"; // Bottom-right

    // Check for Pattern 3 (Vertical Symmetry)
    const pattern3 =
      grid[r - 1][c - 1] === "M" && // Top-left
      grid[r - 1][c + 1] === "M" && // Top-right
      grid[r][c] === "A" && // Center
      grid[r + 1][c - 1] === "S" && // Bottom-left
      grid[r + 1][c + 1] === "S"; // Bottom-right

    // Check for Pattern 4 (Horizontal Symmetry)
    const pattern4 =
      grid[r - 1][c - 1] === "S" && // Top-left
      grid[r - 1][c + 1] === "S" && // Top-right
      grid[r][c] === "A" && // Center
      grid[r + 1][c - 1] === "M" && // Bottom-left
      grid[r + 1][c + 1] === "M"; // Bottom-right

    return pattern1 || pattern2 || pattern3 || pattern4;
  };

  // Iterate through each cell in the grid
  for (let r = 1; r < rows - 1; r++) {
    for (let c = 1; c < cols - 1; c++) {
      if (isValidXMAS(r, c)) {
        count++; // Increment count if any X-MAS pattern is valid
      }
    }
  }

  return count;
};

// Count the X-MAS patterns
const xMasCount = countXMASPatterns(input);

// Output the result
console.log(`The number of X-MAS patterns is: ${xMasCount}`);
updateSolution(xMasCount);
