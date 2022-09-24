function getDigit(num, i) {
   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
   if (num === 0) return 1;
   return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
   let maxDigits = 0;
   for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
   }
   return maxDigits;
}

function radixSort(nums) {
   let maxDigitCount = mostDigits(nums);
   for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []); //10 empty arrays. One for each digit.
      for (let i = 0; i < nums.length; i++) {
         let digit = getDigit(nums[i], k); //sort into buckets based on the kth digit
         digitBuckets[digit].push(nums[i]);
      }
      nums = [].concat(...digitBuckets); //pull the numbers out of the buckets, in order, then continue sorting by the next k digit
   }
   return nums;
}

console.log(
   radixSort([
      123, 44, 251, 2, 2345, 424, 1231, 984, 26, 23, 143, 78, 94, 37, 45, 195,
      254, 294, 202, 543, 945, 745, 642, 832, 748, 237, 543, 598, 220, 12, 4,
   ])
);
