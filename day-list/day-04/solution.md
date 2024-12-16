# Day 04 Solution

## Problem

A small Elf has asked for help solving a word search puzzle. The word search contains the word `XMAS`, which can appear:
- Horizontally
- Vertically
- Diagonally
- Backwards
- Overlapping other words

The puzzle is not a typical word search because you need to find **all instances** of the word `XMAS`. Each instance can overlap with others or appear in any direction.

Here is an example of a word search:

```
MMMSXXMASM
MSAMXMSMSA 
AMXSXMAAMM 
MSAMASMSMX 
XMASAMXAMM 
XXAMMXXAMA 
SMSMSASXSS 
SAXAMASAAA 
MAMMMXMMMM 
MXMXAXMASX
```


In the above word search, the word `XMAS` appears **18 times**.

---

## Task

1. **Find All Instances of `XMAS`**:
   - Search the word grid in all directions:
     - Horizontal (left-to-right and right-to-left)
     - Vertical (top-to-bottom and bottom-to-top)
     - Diagonal (both forwards and backwards)

2. **Count Overlapping Words**:
   - Allow overlapping characters to be reused across multiple instances.

3. **Output the Total Count**:
   - Calculate the total number of times `XMAS` appears in the word search grid.

---

## Approach

### 1. Parse the Input Grid
- Read the input from the file (`input.txt`).
- Split the input string into rows using `.split("\n")`.
- Convert each row into an array of characters to create a 2D grid.

### 2. Define Directions for Word Search
- Use a list of 8 possible directions:
  - Right: `[0, 1]`
  - Left: `[0, -1]`
  - Down: `[1, 0]`
  - Up: `[-1, 0]`
  - Diagonals: `[1, 1]`, `[-1, -1]`, `[1, -1]`, `[-1, 1]`

### 3. Implement the Search Function
- For each starting point in the grid:
  - Check all 8 directions to see if the word `XMAS` matches character-by-character.
  - Ensure the search stays within the grid boundaries using a helper function `isValid`.

### 4. Count Matches
- Use a counter (`count`) to keep track of all valid occurrences of `XMAS`.

### 5. Output the Total Count
- Return the value of the counter.
- Print the total occurrences of `XMAS`.

#### Pseudo Code:

```  
    const directions = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
    [1, 1], // Down-Right
    [-1, -1], // Up-Left
    [1, -1], // Down-Left
    [-1, 1], // Up-Right
  ];
  ```

## Spoiler ahead:
```
       *
      /|\
     /*|O\
    /*/|\*\
   /X/O|\X\0\
  /*/X/|\X*-*\
 //O//X|O\X\o\2\
/X/O/*/X|\O\X**o\
    |X| |X|

Merry Christmas! 🎄

```
## Conclusion
```
2551
```
## Summary

_I am feeling thirsty 🥛_