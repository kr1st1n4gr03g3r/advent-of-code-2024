# Day 01 Solution

## Problem

### Task:
You are given two columns of numbers:

1. **Sort each column in ascending order**:
   - Column A: `[16084, 50267, 63342, 64856, 73972, 85009, 97924, 98415]`
   - Column B: `[10716, 11396, 12015, 32019, 45754, 60876, 63472, 81584]`

2. **Find the difference between the corresponding numbers in each sorted column**:
   - Subtract the smallest number in Column B from the smallest number in Column A, the second smallest from the second smallest, and so on.

3. **Ensure the result is non-negative**:
   - Always subtract the smaller number from the larger number to avoid negative values.

4. **Sum the differences**:
   - Add up all the results of the subtractions to get the final similarity score.

## Approach

#### Pseudo Code:

1. **Read and Parse Input**:
   - Use the `fs` module to read data from `input.txt`.
   - Clean the input by trimming extra whitespace and splitting it into individual lines.
   - For each line:
     - Split numbers by whitespace.
     - Convert numbers into arrays and nest each number into its own array, creating a 3D array structure.

2. **Sort Arrays**:
   - Extract the first numbers (Column A) from each pair into a new array and sort them in ascending order.
   - Extract the second numbers (Column B) from each pair into another array and sort them in ascending order.

3. **Recombine Sorted Arrays**:
   - Combine the sorted numbers from Column A and Column B into pairs by aligning them by index.

4. **Find Differences**:
   - For each pair in the recombined array:
     - Calculate the absolute difference between the two numbers.
     - Wrap the result in an array.

5. **Calculate Total Sum**:
   - Flatten the array of differences into a single array.
   - Sum all the numbers in the flattened array to get the total.

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
Total Sum: 2000468
```
## Summary

_I am feeling rusty_