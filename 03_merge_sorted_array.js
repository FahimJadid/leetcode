//

const merge = function (nums1, m, nums2, n) {
  // Append the elements of nums2 to the end of nums1
  nums1.splice(m, n, ...nums2);

  // Sort the entire nums1 array
  nums1.sort((a, b) => a - b);
};

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
