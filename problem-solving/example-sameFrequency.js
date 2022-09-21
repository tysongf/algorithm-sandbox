//given 2 strings.
//calculate if all characters occur the same frequency
function sameFrequency(a, b) {
   let aString = "" + a;
   let bString = "" + b;
   if (aString.length != bString.length) return false;

   let aObj = {};
   let bObj = {};

   for (let char of aString) {
      aObj[char] = aObj[char] ? aObj[char]++ : 1;
   }
   for (let char of bString) {
      bObj[char] = bObj[char] ? bObj[char]++ : 1;
   }

   for (let key in aObj) {
      if (aObj[key] !== bObj[key]) return false;
   }

   return true;
}
