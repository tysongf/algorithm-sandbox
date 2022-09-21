function swap(arr, i, j) {
   [arr[i], arr[j]] = [arr[j], arr[i]];
}

function selectionSort(arr) {
   for (let x = 0; x < arr.length; x++) {
      let mindex = x;
      for (let i = x; i < arr.length; i++) {
         if (arr[i] < arr[mindex]) mindex = i;
      }
      swap(arr, x, mindex);
   }
   return arr;
}
