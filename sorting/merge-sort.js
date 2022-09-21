function merge(arr1, arr2) {
   const mergedArray = [];
   let x1 = 0;
   let x2 = 0;
   while (x1 < arr1.length && x2 < arr2.length) {
      if (arr1[x1] < arr2[x2]) {
         mergedArray.push(arr1[x1]);
         x1++;
      } else {
         mergedArray.push(arr2[x2]);
         x2++;
      }
   }
   while (x1 < arr1.length) {
      mergedArray.push(arr1[x1]);
      x1++;
   }
   while (x2 < arr2.length) {
      mergedArray.push(arr2[x2]);
      x2++;
   }
   return mergedArray;
}

//   [1,4,8,3]
function mergeSort(arr) {
   if (arr.length <= 1) return arr; //break recursion
   const middle = Math.floor(arr.length / 2);
   const left = mergeSort(arr.slice(0, middle)); //left half
   const right = mergeSort(arr.slice(middle)); //right half
   return merge(left, right);
}
