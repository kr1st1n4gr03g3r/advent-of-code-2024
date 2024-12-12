# Day 01 - Part 02 - Solution

## Problem

### Task:
You are given two columns of numbers:

1. **Find out how often each number from the left list appears in the right list**:
You'll need to figure out exactly how often each number from the left list appears in the right list. Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.

Here are the same example lists again:

3   4
4   3
2   5
1   3
3   9
3   3

For these example lists, here is the process of finding the similarity score:

- The first number in the left list is 3. It appears in the right list three times, so the similarity score increases by 3 * 3 = 9.

- The second number in the left list is 4. It appears in the right list once, so the similarity score increases by 4 * 1 = 4.

- The third number in the left list is 2. It does not appear in the right list, so the similarity score does not increase (2 * 0 = 0).
The fourth number, 1, also does not appear in the right list.
The fifth number, 3, appears in the right list three times; the similarity score increases by 9.

- The last number, 3, appears in the right list three times; the similarity score again increases by 9.
So, for these example lists, the similarity score at the end of this process is 31 (9 + 4 + 0 + 0 + 9 + 9).

Once again consider your left and right lists. What is their similarity score?

## Approach

#### Pseudo Code:

1. Read the input data from `input.txt` and clean it by removing extra whitespace.
2. Split the input into lines and then split each line into individual numbers. Nest each number into its own array to create a 3D array.
3. Extract two columns:
   - **Column A**: Contains the first number from each pair.
   - **Column B**: Contains the second number from each pair.
4. Find how many times each number in Column A appears in Column B:
   - Iterate through each number in Column A.
   - For each number, count its occurrences in Column B.
5. Filter out any numbers from Column A that have a count of zero in Column B.
6. For each remaining match:
   - Multiply the number from Column A by its count from Column B.
   - Store the results in a new array called `productArray`.
7. Calculate the sum of all products in `productArray`.
8. Log the `productArray` and the total sum to the console.


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
Total Sum: 18567089
```
## Summary

_I am doing great_