// function makeNegative(num) {
//   return -num;
// }
// console.log(makeNegative(1));

// function repeatStr(n, s) {
//   return s.repeat(n);
// }
// console.log(repeatStr(3, "*"));

// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }
// console.log(findSmallestInt([78, 56, 232, 12, 8]));

function abbrevName(str) {
  return str
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
console.log(abbrevName("Sam Harris"));
