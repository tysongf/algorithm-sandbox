//Write a function called power which accepts a base and an exponent.
//The function should return the power of the base to the exponent.
//This function should mimic the functionality of Math.pow.
//Do not worry about negative bases and exponents.

function power(base, exponent) {
   if (exponent === 0) return 1;
   if (exponent === 1) return base;
   return base * power(base, exponent - 1);
}

//Write a function 'factorial' which accepts a number and returns
//the factorial of that number. (A product of an integer and all
//the integers below it)

function factorial(number) {
   if (number <= 1) return 1;
   return number * factorial(number - 1);
}

//Write a function which takes in an array of numbers
//and returns the product of them all

function productOfArray(numbers) {
   if (numbers.length === 0) return 1;

   return numbers[0] * productOfArray(numbers.slice(1));
}

//Write a function which accepts a number and
//adds up all the numbers from 0 to the number

function recursiveRange(num) {
   if (num === 0) return 0;
   return num + recursiveRange(num - 1);
}

//Write a recursive function called fib which accepts a number
//and reutnrs the nth number in the fibonacci sequence.

function fib(n) {
   if (n <= 2) return 1;
   return fib(n - 1) + fib(n - 2);
}
