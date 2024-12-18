const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

// ! Split the grid into a 2D array separated by linebreaks
const grid = input.split(`\n`).map((line) => line.split(""));

// ! Find the characters <, >, ^, v within the array
function findCharacters(grid, targets) {
  const positions = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (targets.includes(grid[row][col])) {
        positions.push({ character: grid[row][col], row, col });
      }
    }
  }
  return positions;
}

// ! Movement logic
function moveCharacter(grid, character, startRow, startCol) {
  let currentRow = startRow;
  let currentCol = startCol;

  // Define direction changes for each cursor
  const directions = {
    "^": { row: -1, col: 0 }, // Up
    ">": { row: 0, col: 1 }, // Right
    v: { row: 1, col: 0 }, // Down
    "<": { row: 0, col: -1 }, // Left
  };

  // Define cursor cycle
  const cursorCycle = ["^", ">", "v", "<"];

  console.log(
    `Starting position of "${character}": row ${currentRow}, col ${currentCol}`
  );

  while (true) {
    // Mark current position with X
    grid[currentRow][currentCol] = "X";

    // Calculate next position
    const nextRow = currentRow + directions[character].row;
    const nextCol = currentCol + directions[character].col;

    // Check if out of bounds
    if (
      nextRow < 0 ||
      nextRow >= grid.length ||
      nextCol < 0 ||
      nextCol >= grid[0].length
    ) {
      console.log(
        `"${character}" exited the grid at row ${currentRow}, col ${currentCol}. Terminating.`
      );
      return; // Terminate program
    }

    // Check if next position is a #
    if (grid[nextRow][nextCol] === "#") {
      console.log(
        `"${character}" hit a "#" at row ${nextRow}, col ${nextCol}. Changing direction.`
      );
      character =
        cursorCycle[(cursorCycle.indexOf(character) + 1) % cursorCycle.length]; // Rotate cursor
      continue; // Continue with new direction
    }

    // If next position is already X, continue without stopping
    if (grid[nextRow][nextCol] === "X") {
      console.log(
        `"${character}" hit an X at row ${nextRow}, col ${nextCol}. Continuing.`
      );
      currentRow = nextRow;
      currentCol = nextCol;
      continue;
    }

    // Move to the next position
    currentRow = nextRow;
    currentCol = nextCol;

    // Place the cursor at the new position
    grid[currentRow][currentCol] = character;
    console.log(
      `"${character}" moved to: row ${currentRow}, col ${currentCol}`
    );
  }
}

const targets = ["^", ">", "v", "<"];

const positions = findCharacters(grid, targets);

// ! Move all cursors
if (positions.length > 0) {
  for (let { row, col, character } of positions) {
    moveCharacter(grid, character, row, col);
  }
} else {
  console.log(`No target characters found.`);
}

// ! Convert grid back to string for display
const outputGrid = grid.map((line) => line.join("")).join("\n");
console.log("Final grid:\n" + outputGrid);

// ! Count and print the number of X
function countX(grid) {
  let count = 0;
  for (let row of grid) {
    for (let cell of row) {
      if (cell === "X") count++;
    }
  }
  return count;
}
const numberOfX = countX(grid);
console.log(`Number of X in the grid: ${numberOfX}`);

// Update the solution
updateSolution(numberOfX);
