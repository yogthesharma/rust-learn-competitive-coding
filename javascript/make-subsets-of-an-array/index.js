/**
 * @param {number[]} arr
 * @return {number[]}
 */

function makeSubsetOfArray(arr) {
  const subsets = [];
  function backtrack(curr, start) {
    subsets.push([...curr]);
    for (let i = start; i < arr.length; i++) {
      curr.push(arr[i]);
      backtrack(curr, i + 1);
      curr.pop();
    }
  }
  backtrack([], 0);
  return subsets;
}

console.log(makeSubsetOfArray([1, 2]));
