//My naiive but efficient solution.
function countUniqueValues(arr) {
   //accepts a sorted array, and counts the unique values in the array.
   //[-3,-2,-2,-2,-1,-1,0,0,1,1,2,3,4,4] //should be 8
   //[] (empty array is an edge case)
   //[x] always return one
   if (arr.length < 2) return arr.length;

   let count = 1;
   let i = 0;
   let i2 = 1;
   while (i2 < arr.length) {
      if (arr[i] !== arr[i2]) {
         count++;
      }
      i++;
      i2++;
   }
   return count;
}

//Better solution. Let j scout each value in a loop.
//If the value is unique, store it at i, increment i, and continue

function countUniqueValues2(arr) {
   if (!arr[1]) return 0;
   let i = 0;
   let j = 1;

   while (j < arr.length) {
      if (arr[i] !== arr[j]) {
         i++; //move i first.
         arr[i] = arr[j]; //important!
      }
      j++;
   }
   return i + 1;
}
