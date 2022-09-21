function swap(arr, i, j) {
   [arr[i], arr[j]] = [arr[j], arr[i]];
}

function bubbleSort(arr) {
   for (let x = 0; x < arr.length; x++) {
      let swapped = false;
      for (let i = 0; i < arr.length - 1 - x; i++) {
         if (arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
            swapped = true;
         }
      }
      if (!swapped) break;
   }
   return arr;
}
