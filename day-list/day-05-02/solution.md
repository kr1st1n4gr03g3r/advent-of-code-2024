# Day 05-02 Solution

## Problem

We needed to fix the updates that were not in the correct order. Using the page ordering rules, the task was to reorder these updates properly, find the middle page number in each corrected update, and calculate the sum of those middle numbers.

### Task:

1. Identify updates that are **invalid** (not following the ordering rules).  
2. Reorder the invalid updates using the provided ordering rules.  
3. Find the **middle page number** of each corrected update.  
4. Sum up the middle numbers and output the result.

## Approach

1. **Separate Input**:  
   - Split the input into two parts:
     - **Page Ordering Rules**: Rules specifying dependencies (`X|Y`).
     - **Updates**: Lists of page numbers.

2. **Validation**:  
   - Checked if an update is valid using the ordering rules.

3. **Reordering Invalid Updates**:  
   - Used **Topological Sorting** to reorder pages based on the ordering rules.  
   - Built a graph where:
     - `X` points to `Y` (X must come before Y).  
     - Pages with no dependencies are added to the result first.

4. **Middle Number Calculation**:  
   - After reordering an update, the middle number was identified using:
     ```javascript
     const middleNumber = reorderedPages[Math.floor(reorderedPages.length / 2)];
     ```

5. **Sum Calculation**:  
   - Added up the middle numbers of all corrected updates.

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
11842
```
## Summary

I am feeling determined 🛠️