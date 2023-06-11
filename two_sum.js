// arr of nums, target num, return indices of nums that add up to the target
// [1,2,3,4,5] - 9 => 3,4

// arr of nums - not blank, always whole, positive, always at least two
// return indices of the nums that add up to target => []

// [1,2,3,4,5], 9 => [3,4]
// [5,6,9], 11 => [0,1]
// [22, 7, 100, 5], 12 => [1,3]

const twoSum = (nums, target) => {
  // grab num
  for (let i = 0; i < nums.length; i++) {
    // comparing outer num to inner num
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 5], 9), '[3, 4]');
console.log(twoSum([5, 6, 9], 11), '[0, 1]');
console.log(twoSum([22, 7, 100, 5], 12), '[1, 3]');

const twoSum = (nums, target) => {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
};

const twoSum = (nums, target) => {
  const numMap = new Map();

  for (const [i, num] of nums.entries()) {
    const complement = target - num;

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(num, i);
  }

  return [];
};

console.log(twoSum([1, 2, 3, 4, 5], 9), '[3, 4]');
console.log(twoSum([5, 6, 9], 11), '[0, 1]');
console.log(twoSum([22, 7, 100, 5], 12), '[1, 3]');
