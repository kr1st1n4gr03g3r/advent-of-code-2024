# Day 02 Solution

## Problem

Your puzzle input consists of many reports, one report per line. Each report is a list of numbers called levels that are separated by spaces. For example:

```
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
```

This example data contains six reports each containing five levels.

The engineers are trying to figure out which reports are safe. The Red-Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing. So, a report only counts as safe if both of the following are true:

The levels are either all increasing or all decreasing.
Any two adjacent levels differ by at least one and at most three.
In the example above, the reports can be found safe or unsafe by checking those rules:

7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
So, in this example, 2 reports are safe.

### Task:

The levels are either all increasing or all decreasing.
Any two adjacent levels differ by at least one and at most three.

Analyze the unusual data from the engineers. How many reports are safe?

## Approach

#### Pseudo Code:

## Approach

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

3. **Process the Arrays**:
   - Apply the `checkArraySafety` function to each array to evaluate its safety.
   - Filter the results to count how many arrays are deemed safe.

4. **Output the Results**:
   - Log the detailed results and the total count of safe arrays to the console.
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
639
```
## Summary

_I am feeling spicy 🌶️_