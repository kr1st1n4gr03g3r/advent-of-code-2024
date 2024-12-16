# Day 04-02 Solution

## Problem

### Task:
The goal is to find patterns in a word search that resemble an "X-MAS" structure. Specifically, we are looking for the following four patterns:

1. **Pattern 1 (Forward X-MAS)**:
   ```
   M . S
   . A .
   M . S
   ```
2. **Pattern 2 (Backward X-MAS)**:
   ```
   S . M
   . A .
   S . M
   ```
3. **Pattern 3 (Vertical Symmetry)**:
   ```
   M . M
   . A .
   S . S
   ```
4. **Pattern 4 (Horizontal Symmetry)**:
   ```
   S . S
   . A .
   M . M
   ```

Each pattern must:
- Have the character `A` at its center.
- Include valid `M` and `S` characters in their respective positions around the center.
- Be counted multiple times if they overlap with other patterns.

---

## Approach

### 1. Parse the Input
- Read the grid from `input.txt` and split it into a 2D array for easy navigation.

### 2. Define the Patterns
- Create a function `isValidXMAS` to check if a valid X-MAS pattern exists at a given center `(r, c)`.
- Use conditional checks for:
  - **Boundary constraints**: Ensure the pattern doesn't exceed the grid's edges.
  - **Character matching**: Verify the arrangement of `M`, `S`, and `A` for all four patterns.

### 3. Iterate Through the Grid
- Loop through each cell in the grid, treating each as a potential center for an X-MAS pattern.
- Skip edge cells that can't form a valid X-MAS pattern.

### 4. Count Matches
- For every valid X-MAS pattern found, increment the count.
- Allow overlaps by considering all possible X-MAS patterns independently.

### 5. Output the Result
- Print the total number of X-MAS patterns found.
- Use the `updateSolution` utility to save the final count.


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
1985
```
## Summary

_I am feeling ... 🍔_