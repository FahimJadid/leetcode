/* given, 
integer array : nums
an integer : val

return number of elements in nums which are !== val

Remove all occurrences of a given value from an integer array, update the array in-place, and return the count of remaining elements

nums = input array
val = value to remove

count nums = expected answers
k = removed Elements


*/
function removeElement(nums, val) {
  let count = 0;
  while (count < nums.length) {
    if (nums[count] === val) {
      nums.splice(i, 1); // Remove the element at index i
    } else {
      count++; // Move to the next element
    }
  }
  return nums.length; // Return the count of remaining elements
}

const removeElement = (nums, val) => {
  let count = 0; // Initialize count of remaining elements

  // Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to the given value
    if (nums[i] !== val) {
      nums[count] = nums[i]; // Move the non-equal element to the front of the array

      count++; // Increment the count of remaining elements
    }
  }

  // Return the count of remaining elements
  return count;
};
