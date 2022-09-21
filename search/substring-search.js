//Looks like O(n²) but it is O(n)
//since the needle is usually small

function stringSearch(haystack, needle) {
   let matchCount = 0;
   for (let h = 0; h < haystack.length; h++) {
      for (let n = 0; n < needle.length; n++) {
         if (haystack[h + n] !== needle[n]) break;
         if (n + 1 === needle.length) matchCount++;
      }
   }
   return matchCount;
}
