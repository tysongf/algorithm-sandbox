## Analyzing Performance of Arrays and Objects

### OBJECTS

CRUD Operations are in constant O(1) time.
Search functions in linear O(n) time.

| Feature        | Complexity |
| :------------- | ---------: |
| Object.keys    |       O(n) |
| Object.values  |       O(n) |
| Object.entries |       O(n) |
| hasOwnProperty |       O(1) |

### Array Methods

| Feature                           | Complexity |                                                     Example |
| :-------------------------------- | ---------: | ----------------------------------------------------------: |
| Access element                    |       O(1) |                                                  myArray[7] |
| Insert/Remove at end              |       O(1) |                                              .push() .pop() |
| Insert/Remove at middle/beginning |       O(n) | .shift() .unshift() .slice() .splice() .concat() .forEach() |
| Searching                         |       O(n) |                                  .filter() .reduce() .map() |
| Sorting                           | 0(n log n) |                                                     .sort() |

### Complexity Notation

| Complexity  |         Formula | O-Notation |
| :---------- | --------------: | ---------: |
| linear      |      (f(n) = n) |       O(n) |
| quadratic   |     (f(n) = n²) |      O(n²) |
| constant    |      (f(n) = 1) |       O(1) |
| logarithmic | (f(n) = log(n)) |   O(log n) |
| others      |      f(n log n) | O(n log n) |
