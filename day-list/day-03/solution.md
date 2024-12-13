# Day 03 Solution

## Problem

The input is all bunged up.

### Task:

1. **Extract and Validate Instructions**:
   - Identify all properly formatted `mul(X,Y)` instructions from a corrupted input string.

2. **Validation Criteria**:
   - Instructions must follow the exact format `mul(X,Y)`, where `X` and `Y` are numbers (1-3 digits).

3. **Ignore Invalid Instructions**:
   - Disregard any instructions with corrupted characters or improper formatting.

4. **Perform Multiplication**:
   - Multiply the two numbers `X` and `Y` for each valid `mul` instruction.

5. **Calculate the Total**:
   - Sum the results of all valid multiplications.

6. **Output the Final Total**:
   - Display the sum of all valid `mul` results.

## Approach

#### Pseudo Code:

## Approach for Solving the `mul` Task

### 1. Parse the Input
- Read the input string from `input.txt`.
- Use a regular expression to identify all valid `mul(X,Y)` instructions.
  - **Valid Format**: `mul(X,Y)` where:
    - `X` and `Y` are numbers containing 1–3 digits.
    - There is no whitespace between the parentheses or commas.

---

### 2. Extract Valid Instructions
- Use the regex `/mul\((\d{1,3}),(\d{1,3})\)/g` to capture:
  - The first number `X` and the second number `Y` from each valid instruction.
- Store each match in a list for further processing.

---

### 3. Calculate Products
- Iterate through the list of valid `mul(X,Y)` instructions.
- Convert `X` and `Y` from strings to integers.
- Multiply the two numbers and store the result in an array.

---

### 4. Compute the Total Sum
- Use the `reduce()` method to calculate the sum of all products in the array:
  - Start with an initial value of `0` and add each product to the running total.

---

### 5. Output Results
- Log the total sum of all products to the console for verification.
- Use the `updateSolution` utility to store the final result.

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
180233229
```
## Summary

_I am feeling 🫥 hnnmmgg_