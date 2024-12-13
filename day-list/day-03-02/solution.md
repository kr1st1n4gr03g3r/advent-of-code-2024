# Day 03 Part 02 Solution

## Problem

The input is corrupted and includes conditional statements alongside multiplication instructions.

### Task:

1. **Extract and Validate Instructions**:
   - Identify all properly formatted `mul(X,Y)` instructions from a corrupted input string.
   - Consider conditional instructions (`do()` and `don't()`), which enable or disable subsequent `mul` instructions.

2. **Validation Criteria**:
   - Instructions must follow the exact format:
     - `mul(X,Y)`: `X` and `Y` are numbers (1–3 digits).
     - `do()`: Enables future `mul` instructions.
     - `don't()`: Disables future `mul` instructions.

3. **Apply Conditions**:
   - The program starts with all `mul()` instructions enabled.
   - The most recent `do()` or `don't()` instruction determines whether the next `mul()` instruction is enabled or disabled.

4. **Perform Multiplication**:
   - Multiply the two numbers `X` and `Y` for each enabled `mul` instruction.

5. **Calculate the Total**:
   - Sum the results of all enabled multiplications.

6. **Output the Final Total**:
   - Display the sum of all enabled `mul` results.

---

## Approach

### Pseudo Code:

1. **Parse the Input**:
   - Read the input string from `input.txt`.
   - Use a regular expression to identify valid `mul(X,Y)`, `do()`, and `don't()` instructions.

2. **Extract and Process Instructions**:
   - Use the regex `/do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\)/g` to capture:
     - `do()` and `don't()` for enabling or disabling instructions.
     - `mul(X,Y)` for multiplication tasks.

3. **Track State**:
   - Start with `mul` instructions **enabled**.
   - Update the state based on the most recent `do()` or `don't()`:
     - `do()` → Enable subsequent `mul`.
     - `don't()` → Disable subsequent `mul`.

4. **Perform Multiplications**:
   - For each valid `mul(X,Y)`:
     - If `mul()` is enabled, calculate the product `X * Y`.
     - Add the result to the total sum.

5. **Compute and Output the Total**:
   - Sum all products of enabled `mul(X,Y)` instructions.
   - Log the total sum for verification.


---


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
95411583
```
## Summary

_I am feeling sleepy 😴_