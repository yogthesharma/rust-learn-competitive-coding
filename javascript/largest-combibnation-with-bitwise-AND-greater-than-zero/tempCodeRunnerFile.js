/**
//  * @param {number[]} candidates
//  * @return {number}
//  */
// var largestCombination = function (candidates) {
//   if (!Array.isArray(candidates)) {
//     return 0;
//   }

//   if (candidates.length === 1) {
//     return candidates[0];
//   }

//   const candidatesLength = candidates.length;

//   let numbersUsed = [];

//   const res = candidates.reduce((acc, val) => val & acc, candidates[0]);

//   return res;
// };

// console.log(largestCombination([16, 17, 71, 62, 12, 24, 14]));