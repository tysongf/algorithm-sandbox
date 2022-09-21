function sumRange(num) {
   if (num === 1) return 1;
   return num + sumRange(num - 1);
}

function multiplyRange(num) {
   if (num === 1) return 1;
   return num * multiplyRange(num - 1);
}
