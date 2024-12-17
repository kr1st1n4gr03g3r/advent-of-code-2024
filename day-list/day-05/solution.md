# Day 5 Solution

## Problem

We needed to validate updates (page sequences) against a set of ordering rules (`X|Y`), where `X` must appear before `Y` if both are present. After filtering for valid updates, the goal was to find the middle number (by position) in each valid update and calculate the sum of those numbers.

### Task:

Validate the updates against the ordering rules, filter out the valid ones, find the middle number by position in each valid update, and sum those numbers together.

## Approach

1. **Validation**:  
   - Use a function to check each update against the ordering rules (`X|Y`).  
   - If all rules are satisfied, the update is considered valid.

2. **Processing Valid Updates**:  
   - Store valid updates in an array.  
   - Convert each valid update (comma-separated string) into an array of numbers.

3. **Finding the Middle Number**:  
   - Identify the middle position using `Math.floor(pages.length / 2)`.  
   - Extract the number at this position **without sorting**.

4. **Summing Middle Numbers**:  
   - Accumulate the middle numbers from all valid updates.

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
5275
```
## Summary

I am feeling accomplished 🎉