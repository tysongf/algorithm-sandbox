// Profile Object (eg. Frequency Counter)

// Sometimes it can be more efficient to build an object to profile your data
// Set the properties of your profile object and then analyze
// This can help to avoid nested loops with O(n²) time complexity

function areThereDuplicates() {
   //arguments: [1, 2, 3, 4, 5, 6, 7, 6]
   let lookup = {};
   for (let a of arguments) {
      if (lookup[a] > 0) return true;
      lookup[a] = 1;
   }
   return false;
}

// Use objects or sets to collect values/frequencies of values
// Build Objects to profile each linear structure (string / array)
// Compare the objects.

// Example
// Write a function called same
// it accepts two arrays
// return true if every value in the array has its corresponding value squared in the second array
// the frequency of values must be the same.

// same([1,2,3,2,5], [9,1,4,4,11]);

function same1(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false;
   }
   let frequencyCounter1 = {};
   let frequencyCounter2 = {};
   for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
   }
   for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
   }
   console.log(frequencyCounter1);
   console.log(frequencyCounter2);
   for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
         return false;
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
         return false;
      }
   }
   return true;
}

//given 2 strings.
//calculate if all characters occur the same frequency
function sameFrequency(a, b) {
   let aString = "" + a;
   let bString = "" + b;
   if (aString.length != bString.length) return false;

   let aObj = {};
   let bObj = {};

   for (let char of aString) {
      aObj[char] = aObj[char] ? aObj[char]++ : 1;
   }
   for (let char of bString) {
      bObj[char] = bObj[char] ? bObj[char]++ : 1;
   }

   for (let key in aObj) {
      if (aObj[key] !== bObj[key]) return false;
   }

   return true;
}
