/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

// Integer => (no blank, no string, no neg) just an Integer
// Return true || false

// 121 = true
// 123 = false

// const isPalindrome = function (x) {
//   const str = x.toString();
//   return str === str.split('').reverse().join('');
// };

// console.log(isPalindrome(121), 'true');

const isPalindrome = (x) => {
  if (x < 0) {
    return false; // Negative numbers cannot be palindromes
  }

  let reversed = 0;
  let original = x;

  while (x !== 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return reversed === original;
};
