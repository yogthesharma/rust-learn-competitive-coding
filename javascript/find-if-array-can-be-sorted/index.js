function canSortArray(nums) {
  const isSorted = isArraySorted(nums);
  if (isSorted) {
    return true;
  }
  // now as the array is sorted add the restriction
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (
        nums[j] > nums[j + 1] &&
        countSetBits(nums[j]) === countSetBits(nums[j + 1])
      ) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  const isPostSorted = isArraySorted(nums);
  if (isPostSorted) {
    return true;
  }
  return false;
}

canSortArray([8, 4, 2, 30, 15]);

function isArraySorted(arr) {
  let res = true;
  arr.forEach((val, index) => {
    if (index >= 1 && arr[index - 1] > val) {
      res = false;
    }
  });
  return res;
}

function countSetBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}
