// write a function called sumZero which accepts a SORTED array of integers.
// Function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero
// or undefined if a pair does not exist.

// sumZero([-5,-4,-2,0,1,2,3,6,9,10,11,16,20,22]);

//Naive solution O(n²)
function sumZero1(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] + arr[j] === 0) {
            return [arr[i], arr[j]];
         }
      }
   }
}

//Better solution O(n)
function sumZero2(arr) {
   let left = 0;
   let right = arr.length - 1;
   while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
         return [arr[left], arr[right]];
      } else if (sum > 0) {
         right--;
      } else {
         left++;
      }
   }
}
