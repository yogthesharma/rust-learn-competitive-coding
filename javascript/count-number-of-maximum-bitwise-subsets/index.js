/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let res = 0;
  const bitwiseOrOfWholeArray = findBitwiseOrOfArray(nums);
  const allArraySubsets = generateSubsets(nums);
  for (const arraySubset of allArraySubsets) {
    if (findBitwiseOrOfArray(arraySubset) === bitwiseOrOfWholeArray) {
      res++;
    }
  }
  return res;
};

function generateSubsets(arr) {
  const subsets = [];

  function backtrack(curr, start) {
    subsets.push([...curr]);

    for (let i = start; i < arr.length; i++) {
      curr.push(arr[i]);
      console.log(arr[i]);
      backtrack(curr, i + 1);
      curr.pop();
    }
  }

  backtrack([], 0);
  return subsets;
}

generateSubsets([2, 3, 4]);
// console.log({ generateSubsets: generateSubsets([2, 3, 4]) });

/**
 * @param {number[]} nums
 * @return {number}
 */
function findBitwiseOrOfArray(arr) {
  return arr.reduce((acc, val) => acc | val, arr[1]);
}
