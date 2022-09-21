//Hard exercises...

// Write a recursive function called reverse which accepts a string
// and returns a new string in reverse.

// reverse string (eg. hello -> olleh)

function reverse(str) {
   let newString = "";
   function help(str) {
      if (str.length === 0) return;
      newString += str.charAt(str.length);
      return help(str.slice(1, str.length - 1));
   }
   help(str);
   return newString;
}

// racecar
function isPalindrome(str) {
   function checkEnds(str) {
      if (str.length <= 1) return true;
      if (str.charAt(0) !== str.charAt(str.length - 1)) {
         return false;
      }
      str = str.slice(str.length - 1);
      str = str.slice(1);
      checkEnds(str);
      return true;
   }
   return checkEnds(str);
}

// return true if a single value in the array returns true when passed to the callback.
// otherwise returns false (this one was easy)

function someRecursive(arr, callback) {
   if (arr.length === 0) return false;
   if (callback(arr[0])) return true;
   return someRecursive(arr.slice(1), callback);
   return false;
}

// flatten an array of arrays
function flatten(grid) {
   let flatArray = [];
   if (grid.length === 0) return flatArray;
   if (grid[0].length === 0) return flatArray;
   function flat(grid) {
      if (grid.length === 0) return;
      flatArray = flatArray.concat(grid[0]);
      return flat(grid.slice(1));
   }
   flat(grid);
   return flatArray;
}
