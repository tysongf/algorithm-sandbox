// Given two strings, write a function to determine
// if the second string is an anagram of the first.

//Remember to use 'of' for strings and 'in' for objects.
// let char of str
// let key in obj

// Colt's Solution

//From the first string, create a reference object with frequency of each letter.
// { a: 2, c: 1, k: 1, w: 1 }
//then compare each character in the second string.

function validAnagram1(first, second) {
   if (first.length !== second.length) {
      return false;
   }

   const lookup = {};

   for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
   }

   for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
         return false;
      } else {
         lookup[letter] -= 1;
      }
   }

   return true;
}

// My Solution (Slower)
function validAnagram2(str1, str2) {
   if (str1.length !== str2.length) return false;

   const frequencyCounter1 = {};
   const frequencyCounter2 = {};

   for (let char of str1) {
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
   }

   for (let char of str2) {
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
   }

   if (frequencyCounter1.length != frequencyCounter2.length) return false;

   for (let key in frequencyCounter1) {
      if (frequencyCounter1[key] != frequencyCounter2[key]) return false;
   }

   return true;
}

let t1 = performance.now();
console.log(
   validAnagram1("nosirawayapapayawarison", "nosirawayapapayawarison")
);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

let t3 = performance.now();
console.log(
   validAnagram2("nosirawayapapayawarison", "nosirawayapapayawarison")
);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);
