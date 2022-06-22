/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const sum = (value, targetValue) => value + targetValue
  const isSameIndex = (index, targetIndex) => index === targetIndex

  let targetIndex = 0, result = []
  while (targetIndex < nums.length) {
    nums.map((value, index) => {
      if (
        !isSameIndex(index, targetIndex) &&
        sum(value, nums[targetIndex]) === target
      ) {
        result.push(index)
        result.push(targetIndex)
      }
    })

    if (result.length !== 0)
      break

    targetIndex++
  }

  return result.sort()
};

var nums = [3, 2, 4], target = 6;
console.log(twoSum(nums, target));

var nums = [2, 8, 11, 15, 7], target = 9;
console.log(twoSum(nums, target));

var nums = [3, 2, 3], target = 6;
console.log(twoSum(nums, target));

var nums = [3, 1, 3], target = 6;
console.log(twoSum(nums, target));

var nums = [0, 1, 0], target = 0;
console.log(twoSum(nums, target));

var nums = [-1, -2, -3, -4, -5], target = -8;
console.log(twoSum(nums, target));