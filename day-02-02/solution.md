# Day 02 - Part 02 - Solution

## Problem

Now, the same rules apply as before, except if removing a single level from an unsafe report would make it safe, the report instead counts as safe.

More of the above example's reports are now safe:

7 6 4 2 1: Safe without removing any level.
1 2 7 8 9: Unsafe regardless of which level is removed.
9 7 6 2 1: Unsafe regardless of which level is removed.
1 3 2 4 5: Safe by removing the second level, 3.
8 6 4 4 1: Safe by removing the third level, 4.
1 3 6 7 9: Safe without removing any level.

### Task:

The levels are either all increasing or all decreasing.
Any two adjacent levels differ by at least one and at most three.
Next condition: check if there is only ONE unsafe element in each level.

Analyze the unusual data from the engineers. How many reports are safe?

## Approach (Part Two)

#### Pseudo Code:

1. **Read and Parse Input Data**:
   - Use the `fs` module to read data from `input.txt`.
   - Trim any extraneous whitespace from the input.
   - Split the input into individual lines.
   - For each line, split the string by whitespace to extract numbers and convert them into arrays of integers.

2. **Define the `checkArraySafety` Function**:
   - Iterate over each array to assess its safety based on specific conditions:
     - **Check for Strictly Increasing Sequence**:
       - Verify that each number is greater than the preceding number.
     - **Check for Strictly Decreasing Sequence**:
       - Ensure each number is less than the preceding number.
     - **Check for Identical Elements**:
       - Determine if all numbers in the array are the same.
     - **Check for Acceptable Differences**:
       - Calculate the absolute difference between consecutive numbers.
       - Confirm that each difference is between 1 and 3 (inclusive).
     - **Determine Safety**:
       - An array is considered safe if:
         - It is either strictly increasing or decreasing.
         - All consecutive differences are within the acceptable range.
         - Not all elements are identical.

3. **Handle Unsafe Arrays**:
   - If an array is marked unsafe:
     - Iterate through the array and remove one level (number) at a time.
     - For each modified array, re-evaluate its safety using the same conditions as before.
   - If any modified version of the array satisfies the safety conditions:
     - Mark the original array as safe.
     - Note that the array was modified to become safe.

4. **Process the Arrays**:
   - Apply the `checkArraySafety` function to each array to evaluate its safety, including the potential for modification.
   - Filter the results to count how many arrays are deemed safe, either naturally or through modification.

5. **Output the Results**:
   - Log the detailed results, including whether each array was naturally safe or made safe by modification.
   - Log the total count of safe arrays to the console.
   - Update the solution using the `updateSolution` function with the total count of safe arrays.


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
674
```
## Summary

_I am feeling spicy 🌶️_