// Sliding Window

// Create a window (range) using two pointers (a, b) and slide it along the array.

// when sliding, subtract the deprecated value [a] and add the new value [b]

function maxSubArraySum(arr, size) {
   let maxSum = 0;
   let tempSum = 0;
   if (arr.length < size) return null;

   //set initial sum
   for (let i = 0; i < size; i++) {
      maxSum += arr[i];
   }

   tempSum = maxSum;

   //start sliding.
   for (let i = size; i < arr.length; i++) {
      tempSum = tempSum - arr[i - size] + arr[i]; //this is the tricky part. Note the 'let i = size' in the for loop.
      maxSum = Math.max(maxSum, tempSum);
   }
   return maxSum;
}
