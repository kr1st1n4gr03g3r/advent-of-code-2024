const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read and parse the input grid
const rawInput = fs.readFileSync("input.txt", "utf8");

// Movement rules for each direction
const movement = {
  up: { dx: 0, dy: -1, next: "right" },
  down: { dx: 0, dy: 1, next: "left" },
  left: { dx: -1, dy: 0, next: "up" },
  right: { dx: 1, dy: 0, next: "down" },
};

// Simulate guard movement and track visited positions
function simulate({ grid, position }, obstruction = null) {
  const seen = new Set();
  const directionChanges = new Set();

  // Place the obstruction if provided
  if (obstruction) grid[obstruction.y][obstruction.x] = "#";
  grid[position.y][position.x] = ".";

  while (grid[position.y]?.[position.x]) {
    const nextPosition = { ...position };

    // Move in the current direction until hitting an obstacle
    while (grid[nextPosition.y]?.[nextPosition.x] === ".") {
      if (!obstruction) seen.add(`${nextPosition.x},${nextPosition.y}`);
      nextPosition.x += movement[position.dir].dx;
      nextPosition.y += movement[position.dir].dy;
    }

    // Handle hitting an obstacle
    if (grid[nextPosition.y]?.[nextPosition.x] === "#") {
      nextPosition.x -= movement[position.dir].dx;
      nextPosition.y -= movement[position.dir].dy;
      nextPosition.dir = movement[position.dir].next;

      // Detect looping by revisiting the same state
      const loopKey = `${nextPosition.x},${nextPosition.y},${nextPosition.dir}`;
      if (directionChanges.has(loopKey)) return directionChanges;
      directionChanges.add(loopKey);
    }

    position = nextPosition;
  }
  return obstruction ? undefined : seen;
}

// Convert input to a grid and find the starting position
function processInput(input) {
  const grid = input.split("\n").map((row) => row.split(""));
  const startY = grid.findIndex((line) => line.includes("^"));
  const startX = grid[startY].indexOf("^");
  const position = { x: startX, y: startY, dir: "up" };
  return { grid, position };
}

// Part 1: Count unique positions visited
function countVisited(input) {
  return simulate(processInput(input)).size;
}

// Part 2: Determine valid obstruction positions
function calculateObstructionOptions(input) {
  let validCount = 0;
  simulate(processInput(input)).forEach((pos) => {
    const [x, y] = pos.split(",").map(Number);
    if (simulate(processInput(input), { x, y })) validCount++;
  });
  return validCount;
}

// Print the input to the console
console.log(rawInput);

// Calculate results for both parts
const visitedCount = countVisited(rawInput);
const obstructionOptions = calculateObstructionOptions(rawInput);

// Format the solution output
const finalOutput = `# Guard Simulation Results

## Part 1: Unique Positions Visited
${visitedCount}

## Part 2: Valid Obstruction Positions
${obstructionOptions}
`;

// Update the solution
updateSolution(finalOutput);
