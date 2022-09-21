function binarySearch(sortedArray, target) {
   let left = 0;
   let right = sortedArray.length - 1;
   while (true) {
      let middle = Math.ceil((left + right) / 2);
      if (middle === left) return -1;
      if (sortedArray[middle] === target) return middle;
      if (target > sortedArray[middle]) {
         left = middle;
      } else {
         right = middle;
      }
   }
}
