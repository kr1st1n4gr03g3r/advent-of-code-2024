# Day 06 Solution

## Problem

Input is given as to locations of where a "guard" is. The puzzle input looks like this:

```
....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
```

The map shows the current position of the guard using `^`. The "up" arrow means she is facing up. Hashes (`#`) mean that it is a piece of furnature like a desk or a reactor etc.

The **rules** for this problem are:
- If there is something directly in front of the guard, turn right 90 degrees
- Otherwise, take a step forward

**Guard's Path**

1. Following the above rules, the guard moves several times until she reaches an obstacle:

```
....#.....
....^....#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
```

2. Because there is an obstacle in front of her, she now turns right and continues straight:

```
....#.....
........>#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
```

3. She reaches another obstacle:

```
....#.....
.........#
..........
..#.......
.......#..
..........
.#......v.
........#.
#.........
......#...
```

4. Finally, she continues on and then hits the end of the map, which ends the program.

```
....#.....
.........#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#v..
```

### Task:

When predicting the guard's route, you need to:
- Count how many positions were visited by the guard (including the starting position).
- Mark each position visited by the guard with an X:

```
....#.....
....XXXXX#
....X...X.
..#.X...X.
..XXXXX#X.
..X.X.X.X.
.#XXXXXXX.
.XXXXXXX#.
#XXXXXXX..
......#X..

```
In this example, she has visited 41 distinct positions on the map.

**Find the amount of distinct positions the guard visited before leaving the marked area**

## Approach

Cursor Movement:

^ moves up (decreasing row index).
> moves right (increasing column index).
v moves down (increasing row index).
< moves left (decreasing column index).
Behavior on #:

If a cursor hits a #, it changes to the next cursor in a clockwise cycle:
^ → > → v → < → back to ^.
Marking with X:

Every position visited by the cursor is marked with X.
The starting position is also marked.
Termination:

If the cursor exits the grid, terminate the program. Replace the cursor's last position with X, and ensure no cursors remain on the grid.

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
# Guard Simulation Results

## Part 1: Unique Positions Visited
4789

## Part 2: Valid Obstruction Positions
1304

```
## Summary

_I am feeling excited 😄"_