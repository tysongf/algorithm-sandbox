## Big O Notation: (Ordnung)

**_Big O_** is a formalised method to measure Time and Space Complexity.

**_Big O_** allows us to talk about how the runtime of an algorithm grows as the input grows.

### Time Complexity

| Complexity  |         Formula | O-Notation |
| :---------- | --------------: | ---------: |
| linear      |      (f(n) = n) |       O(n) |
| quadratic   |     (f(n) = n²) |      O(n²) |
| constant    |      (f(n) = 1) |       O(1) |
| logarithmic | (f(n) = log(n)) |   O(log n) |
| others      |      f(n log n) | O(n log n) |

### O(1) = Operations with _constant_ time complexity

-  Arithmetic operations
-  Variable assignment
-  Accessing array elements by index or object key

### Common Complexities

| O-Notation | Description                                       |
| :--------- | :------------------------------------------------ |
| O(1)       | Constant                                          |
| O(log n)   | Logarithmic (inverse of exponential)              |
| O(n)       | Linear                                            |
| O(n²)      | Quadratic                                         |
| O(n log n) | Time goes up linearly while n grows exponentially |
| O(n³)      | Cubic                                             |
| O(nⁿ)      | Exponential                                       |
| O(n!)      | Factorial                                         |
