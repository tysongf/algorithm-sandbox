/*
In a loop, the complexity is the length of the loop,
times the complexity of what happens inside the loop.

The Problem with measuring complexity using Time
Different machines will record different times.
The same machine will record different times.
Speed measurements may not be precise enough.

Instead, we want to count the number of operations.

Performance Tracker Tool:
https://rithmschool.github.io/function-timer-demo/

*/

//Time Complexity Examples

// O(n)
function addUpToV1(n) {
   let total = 0; //1 operation
   for(let i = 1; i<= n; i++) { //4n operations (i<=n: 2, i++: 2) + 1
      total += i; //2n operations (+ and =)
   }
   return total;
   //6n + 2 operations : O(n)
}

// O(1)
function addUpToV2(n) {
   return n _ (n + 1) / 2;
   //3 operations (_, +, and /) : O(1)
}

let t1 = performance.now();
console.log(addUpToV1(1000000000));
let t2 = performance.now();
console.log(addUpToV2(1000000000));
let t3 = performance.now();

console.log(`V1: ${(t2-t1) /1000} seconds.`);
console.log(`V2: ${(t3-t2) /1000} seconds.`);

/*
SPACE COMPLEXITY
Space complexity (auxiliary space complexity)
Space used by the execution of the algorithm

Most primitives are constant space.
Strings require O(n) space (where n is the string length)
Reference types are generally O(n) where n is the length (arrays) or number of keys (objects)
*/

//Space Complexity examples

// O(1) Constant space complexity
function sum(arr) {
   let total = 0;
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   return total;
}

// O(n) Linear space complexity
function double(arr) {
   let newArr = [];
   for(let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
   }
   return newArr;
}
