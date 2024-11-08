/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let indexOfElementToRemove = nums.indexOf(val);

  while (indexOfElementToRemove !== -1) {
    nums.splice(indexOfElementToRemove, 1);
    indexOfElementToRemove = nums.indexOf(val);
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
