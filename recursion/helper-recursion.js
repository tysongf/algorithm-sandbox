function collectOddValues(arr) {
   let results = [];

   function helper(helperInput) {
      if (helperInput.length === 0) {
         return;
      }

      if (helperInput[0] % 2 !== 0) {
         //number is odd.
         results.push(helperInput[0]);
      }
      helper(helperInput.slice(1));
   }

   helper(arr);

   return results;
}

//collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12,13]);

//Pure Recursion Method (more confusing Method)

function collectOddValues2(arr) {
   let newArr = [];

   if (arr.length === 0) {
      return newArr; //return empty array
   }

   //If the first element is odd, add it to the new array.
   if (arr[0] % 2 !== 0) {
      newArr.push(arr[0]);
   }

   newArr = newArr.concat(collectOddValues2(arr.slice(1)));
   return newArr;
}

collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9]);
