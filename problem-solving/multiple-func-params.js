function areThereDuplicates() {
   //arguments: [1, 2, 3, 4, 5, 6, 7, 6]
   let lookup = {};
   for (let a of arguments) {
      if (lookup[a] > 0) return true;
      lookup[a] = 1;
   }
   return false;
}
